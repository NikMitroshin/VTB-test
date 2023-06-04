import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export enum TabRouteNames {
  ABOUT_APP = 'Main',
  QUOTES = 'Quotes',
}
export enum StackRouteNames {
  ROOT_TAB = 'ROOT_TAB',
}
export interface TabParamList {
  [TabRouteNames.ABOUT_APP]: undefined
  [TabRouteNames.QUOTES]: undefined

  [key: string]: any
}

export interface StackParamList {
  [StackRouteNames.ROOT_TAB]: undefined

  [key: string]: any
}

export interface StackNavProp<T extends keyof StackParamList> {
  navigation: StackNavigationProp<StackParamList, T>
  route: RouteProp<StackParamList, T>
}

export type AppNavigation = StackParamList | TabParamList | StackNavigationProp<any>
