import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SplashScreen from 'react-native-splash-screen'

import ScreensStack from 'navigation/components/ScreensStack'

const Root: React.FC = () => (
  <>
    <StatusBar barStyle='light-content' />
    <SafeAreaProvider>
      <NavigationContainer onReady={SplashScreen.hide}>
        <ScreensStack />
      </NavigationContainer>
    </SafeAreaProvider>
  </>
)

export default Root
