import { createSlice } from '@reduxjs/toolkit'

import { QuotesItem } from 'features/quotes/types'
import patchStateReducer from 'helpers/patchStateReducer'

export interface QuotesState {
  quotesList: QuotesItem[]
}

const initialState: QuotesState = {
  quotesList: [],
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
