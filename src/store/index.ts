import { ConfigureStoreOptions, configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'

import reactotron from 'lib/reactotron'
import { rootReducer } from 'store/rootReducer'
import { Environment } from 'types'

const defaultMiddlewares = {
  serializableCheck: false,
  immutableCheck: false,
  thunk: true,
}

const options: ConfigureStoreOptions = {
  reducer: rootReducer,
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(defaultMiddlewares),
  enhancers:
    process.env.NODE_ENV === Environment.development && reactotron?.createEnhancer ? [reactotron.createEnhancer()] : [],
}

export const store = configureStore(options)
export const persistor = persistStore(store)
