import { QuotesResponse } from 'clients/quotesClient/types'
import { Quotes } from 'features/quotes/types'

const getFrom = (key: string): string => key.slice(0, key.indexOf('_'))
const getTo = (key: string): string => key.slice(key.indexOf('_') + 1)

export const mapQuotesData = (data: QuotesResponse): Quotes =>
  Object.entries(data)
    .map(([key, pair]) => ({
      ...pair,
      from: getFrom(key),
      to: getTo(key),
    }))
    .filter((item) => item.from && item.to && item.percentChange)
