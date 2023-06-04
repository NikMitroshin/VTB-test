import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { Route } from '@react-navigation/routers'

import { TabRouteNames } from 'types'

export const getTitleByRoute = (route: Partial<Route<string>>): string => {
  const routeName = getFocusedRouteNameFromRoute(route)

  switch (routeName) {
    case TabRouteNames.MAIN_SCREEN:
      return 'Main'
    default:
      return 'Default Screen'
  }
}

export const getTabBarName = (name: TabRouteNames): string => {
  switch (name) {
    case TabRouteNames.MAIN_SCREEN:
      return 'Main'
    default:
      return ''
  }
}
