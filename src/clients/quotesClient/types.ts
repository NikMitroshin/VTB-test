export type QuotesResponse = Record<string, QuotesResponseItem>
export interface QuotesResponseItem {
  id: number
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
