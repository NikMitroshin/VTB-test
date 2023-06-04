import { createAsyncThunk } from '@reduxjs/toolkit'

import { getQuotes } from 'clients/quotesClient'
import { patchState } from 'features/quotes/store/index'

export const fetchQuotes = createAsyncThunk('events/fetchQuotes', async (_, thunkApi) => {
  const { dispatch } = thunkApi
  // todo add loader
  try {
    const data = await getQuotes()

    dispatch(patchState({ quotes: data }))
  } catch (e) {
    // todo handle err
  }
  // todo finish loader
})
