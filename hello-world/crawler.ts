export type CurrencySourceData = {
  code: string
  codein: string
  name: string
  high: string
  low: string
  varBid: string
  pctChange: string
  bid: string
  ask: string
  timestamp: string
  create_date: string
}

export type CurrencyResponse = Record<string, CurrencySourceData>

export const apiUrl = 'https://economia.awesomeapi.com.br'

export async function getCurrencies(currency) {
  const response = await fetch(`${apiUrl}/last/${currency}`)

  if (response.status != 200)
    throw Error('Error while trying to get currencies from external API')

  return (await response.json()) as CurrencyResponse
}

export default {
  apiUrl,
  getCurrencies,
}
