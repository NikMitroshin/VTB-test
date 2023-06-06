import { makeAutoObservable } from 'mobx'

import { getQuotes } from 'clients/quotesClient'
import { Quotes } from 'features/quotes/types'
import { getErrorMessage } from 'helpers/getErrorMessage'

class QuotesSlice {
  quotes: Quotes = []
  errorMessage = ''

  constructor() {
    makeAutoObservable(this)
  }

  async fetchQuotes(): Promise<void> {
    try {
      this.quotes = await getQuotes()
    } catch (e) {
      this.errorMessage = getErrorMessage(e)
    }
  }
}

export default new QuotesSlice()
