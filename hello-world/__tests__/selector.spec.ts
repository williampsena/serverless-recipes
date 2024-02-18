import { selectCurrencies } from '../selector'

const OK_RESPONSE = {
  USDBRL: {
    code: 'USD',
    codein: 'BRL',
    name: 'Dólar Americano/Real Brasileiro',
    high: '4.9892',
    low: '4.9598',
    varBid: '-0.0062',
    pctChange: '-0.12',
    bid: '4.9665',
    ask: '4.9675',
    timestamp: '1708119003',
    create_date: '2024-02-16 18:30:03',
  },
  BTCBRL: {
    code: 'BTC',
    codein: 'BRL',
    name: 'Bitcoin/Real Brasileiro',
    high: '262000',
    low: '254000',
    varBid: '-187',
    pctChange: '-0.07',
    bid: '259555',
    ask: '259682',
    timestamp: '1708206642',
    create_date: '2024-02-17 18:50:42',
  },
}

describe('given external response', function () {
  it('should translate empty Currency list', function () {
    expect(selectCurrencies({})).toEqual([])
  })

  it('should translate to Currency type', function () {
    expect(selectCurrencies(OK_RESPONSE)).toEqual([
      {
        ask: 4.9675,
        bid: 4.9665,
        code: 'USD',
        name: 'Dólar Americano/Real Brasileiro',
      },
      {
        ask: 259682,
        bid: 259555,
        code: 'BTC',
        name: 'Bitcoin/Real Brasileiro',
      },
    ])
  })
})
