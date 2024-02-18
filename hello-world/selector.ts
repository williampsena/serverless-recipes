import { CurrencyResponse } from './crawler'

export type Currency = {
  name: string
  code: string
  bid: number
  ask: number
}

export const selectCurrencies = (response: CurrencyResponse) =>
  Object.values(response).map(
    currency =>
      ({
        name: currency.name,
        code: currency.code,
        bid: parseFloat(currency.bid),
        ask: parseFloat(currency.ask),
      } as Currency)
  )

export default {
  selectCurrencies,
}
