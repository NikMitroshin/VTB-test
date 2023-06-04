import { QuotesResponse } from 'clients/quotesClient/types'
import { Quotes, QuotesItem } from 'features/quotes/types'

// check valid response (example)
const isValidPair = (item: QuotesItem) => item.id && item.last

export const mapQuotesData = (data: QuotesResponse): Quotes =>
  Object.entries(data).reduce((acc, [key, pair]) => {
    if (isValidPair(pair)) {
      return { ...acc, [key]: pair }
    }

    return acc
  }, {})
