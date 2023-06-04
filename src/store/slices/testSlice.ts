import { createSlice } from '@reduxjs/toolkit'

import patchStateReducer from 'helpers/patchStateReducer'

export interface TestState {
  testCounter: number
}

const initialState: TestState = {
  testCounter: 0,
}

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setTest: (state, action: { payload: number }) => {
      state.testCounter = action.payload
    },
    patchState: patchStateReducer,
    resetTestState: () => initialState,
  },
})

export const { setTest, patchState, resetTestState } = testSlice.actions

export default testSlice.reducer
