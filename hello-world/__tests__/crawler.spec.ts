import fetchMock = require('fetch-mock')
import { getCurrencies } from '../crawler'
import { getFixture } from './support/fixtures'

describe('given external response', function () {
  beforeEach(() => fetchMock.restore())

  it('should raise error when Currency param is empty', async function () {
    fetchMock.mock('*', { status: 404, body: '{}' })

    await getCurrencies('').catch(e => {
      expect(e).toEqual(new Error('Error while trying to get currencies from external API'))
    })
  })

  it('should translate Currency list', async function () {
    fetchMock.mock('*', {
      status: 200,
      body: getFixture('list_currencies_ok.json'),
    })

    const currencies = await getCurrencies('USD-BRL,EUR-BRL,BTC-BRL')

    await expect(currencies).toEqual({})
  })
})
