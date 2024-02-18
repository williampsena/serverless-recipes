import { getCurrencies } from './crawler'
import { selectCurrencies } from './selector'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

const DEFAULT_CURRENCY = 'USD-BRL,EUR-BRL,BTC-BRL' as const

export async function listCurrencies(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  try {
    const currency = event.queryStringParameters?.currency || DEFAULT_CURRENCY
    const currencies = selectCurrencies(await getCurrencies(currency))

    return {
      statusCode: 200,
      body: JSON.stringify(currencies, null, 2),
    }
  } catch (e) {
    console.error(e.toString())

    return {
      statusCode: 500,
      body: '🫡 Something bad happened',
    }
  }
}

export default {
  listCurrencies,
}
