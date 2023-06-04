import React, { memo } from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import TabNavigator from 'navigation/components/TabNavigator'
import { StackParamList, StackRouteNames } from 'types'

const Stack = createStackNavigator<StackParamList>()

const ScreensStack: React.FC = () => (
  <Stack.Navigator detachInactiveScreens screenOptions={{ headerShown: false }}>
    <Stack.Screen name={StackRouteNames.ROOT_TAB} component={TabNavigator} />
    <Stack.Group>{/* TODO add screens */}</Stack.Group>
  </Stack.Navigator>
)

export default memo(ScreensStack)
