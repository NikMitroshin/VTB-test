import { createSlice } from '@reduxjs/toolkit'

import { Quotes } from 'features/quotes/types'
import patchStateReducer from 'helpers/patchStateReducer'

export interface QuotesState {
  quotes: Quotes
}

const initialState: QuotesState = {
  quotes: [],
}

const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    patchState: patchStateReducer,
    resetQuotesState: () => initialState,
  },
})

export const { resetQuotesState, patchState } = quotesSlice.actions

export default quotesSlice.reducer
