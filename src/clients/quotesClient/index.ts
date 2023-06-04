import axios from 'axios'

import { mapQuotesData } from 'clients/quotesClient/mappers'
import { QuotesResponse } from 'clients/quotesClient/types'
import { Quotes } from 'features/quotes/types'
import { EnvConfigService } from 'services/EnvConfigService'

const apiQuotes = axios.create({
  baseURL: EnvConfigService.quotesConfig.apiUrl,
})

export const getQuotes = async (): Promise<Quotes> => {
  const { data } = await apiQuotes.get<QuotesResponse>(`public`, {
    params: {
      command: 'returnTicker',
    },
  })

  return mapQuotesData(data)
}
