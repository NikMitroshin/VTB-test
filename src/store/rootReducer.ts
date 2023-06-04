import { Reducer } from '@reduxjs/toolkit'
import { persistCombineReducers } from 'redux-persist'
import { PersistConfig } from 'redux-persist/es/types'

import testSlice, { TestState } from 'store/slices/testSlice'
import mmkvStorage from 'store/storages/mmkvStorage'

interface Store {
  test: TestState
}

const persistConfig: PersistConfig<Store> = {
  key: 'root',
  storage: mmkvStorage,
  whitelist: [],
  version: 4,
  blacklist: [],
}

const persistedCombinedReducer = persistCombineReducers(persistConfig, {
  test: testSlice,
  // TODO add slices
})

export const rootReducer: Reducer = (state: RootState, action) => persistedCombinedReducer(state, action)

export type RootState = ReturnType<typeof persistedCombinedReducer>
