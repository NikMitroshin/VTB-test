import { createAsyncThunk } from '@reduxjs/toolkit'

import { getQuotes } from 'clients/quotesClient'
import { patchState } from 'features/quotes/store/index'
import { getErrorMessage } from 'helpers/getErrorMessage'

export const fetchQuotes = createAsyncThunk('events/fetchQuotes', async (_, thunkApi) => {
  const { dispatch } = thunkApi

  dispatch(patchState({ errorMessage: '' }))
  // todo add loader
  try {
    const data = await getQuotes()

    dispatch(patchState({ quotes: data }))
  } catch (e) {
    dispatch(patchState({ errorMessage: getErrorMessage(e) }))
  }
  // todo finish loader
})
