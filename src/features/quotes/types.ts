export type Quotes = QuotesItem[]
export type QuotesItem = {
  id: number
  from: string
  to: string
  last: string
  lowestAsk: string
  highestBid: string
  percentChange: string
  baseVolume: string
  quoteVolume: string
  isFrozen: string
  postOnly: string
  high24hr: string
  low24hr: string
}
