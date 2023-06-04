/* eslint-disable */
import url from 'url'
import { NativeModules } from 'react-native'
import Reactotron, { ReactotronReactNative } from 'reactotron-react-native'
import { Reactotron as ReactotronType } from 'reactotron-core-client'
import { MMKV } from 'react-native-mmkv'
import { reactotronRedux } from 'reactotron-redux'

import { store } from 'store'

const storage = new MMKV()

let reactotron: (ReactotronType<ReactotronReactNative> & ReactotronReactNative) | undefined

if (__DEV__) {
  const { hostname } = url.parse(NativeModules.SourceCode.scriptURL)
  reactotron = Reactotron.configure({ host: hostname!, port: 9090 }).useReactNative().use(reactotronRedux()).connect()

  reactotron.onCustomCommand({
    command: 'showStore',
    handler: () => {
      console.log('SHOW STORE')
      const state = store.getState()
      console.log(state)
    },
    title: 'Show store',
  })

  reactotron.onCustomCommand({
    command: 'resetAsyncStorage',
    handler: async () => {
      console.log('Reset async storage')
      await storage.clearAll()
    },
    title: 'Reset async storage',
  })

  // @ts-ignore
  console.log = Reactotron.log
  // @ts-ignore
  console.warn = Reactotron.warn
}

export default reactotron
