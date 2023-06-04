import { Theme } from '@emotion/react'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { Platform } from 'react-native'

interface CommonScreensConfig {
  theme: Theme
}

export const tabBarCommonConfig = ({ theme }: CommonScreensConfig): BottomTabNavigationOptions => ({
  tabBarActiveTintColor: theme.colors.button.main,
  tabBarInactiveTintColor: theme.colors.text.main,
  tabBarStyle: Platform.select({
    android: {
      height: 60,
      paddingBottom: 10,
    },
  }),
  headerStyle: {
    backgroundColor: theme.colors.background.main,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitleAlign: 'center',
  headerTintColor: theme.colors.text.light,
  headerShown: true,
})
