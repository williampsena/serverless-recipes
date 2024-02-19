import {
  APIGatewayProxyEvent,
  APIGatewayProxyEventQueryStringParameters,
} from 'aws-lambda'
import { listCurrencies } from '../handler'
import fetchMock = require('fetch-mock')
import { getFixture } from './support/fixtures'

describe('given listen currencies http request', function () {
  beforeEach(() => fetchMock.restore())

  it('should raise error when Currency param is empty', async function () {
    fetchMock.mock(/\/last\//, { status: 404, body: '' })

    const event = { queryStringParameters: {} } as APIGatewayProxyEvent

    const result = await listCurrencies(event)

    expect(result).toEqual({
      body: '🫡 Something bad happened',
      statusCode: 500,
    })
  })

  it('should return currency list', async function () {
    fetchMock.mock(/\/last\//, {
      status: 200,
      body: getFixture('list_currencies_ok.json'),
    })

    const event = {
      queryStringParameters: {
        currency: 'USD-BRL,EUR-BRL,BTC-BRL',
      } as APIGatewayProxyEventQueryStringParameters,
    } as APIGatewayProxyEvent

    const result = await listCurrencies(event)
    expect(result.statusCode).toBe(200)
    expect(JSON.parse(result.body)).toEqual([])
  })
})
