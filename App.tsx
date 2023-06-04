import React from 'react'

import { ThemeProvider } from '@emotion/react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import theme from 'config/theme'
import Root from 'navigation/RootNavigation'
import { persistor, store } from 'store'

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Root />
      </ThemeProvider>
    </PersistGate>
  </Provider>
)

export default App
