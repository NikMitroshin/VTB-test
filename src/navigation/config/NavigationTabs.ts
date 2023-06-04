import { ReactElement } from 'react'

import QuotesScreen from 'features/quotes/screens/QuotesScreen'
import AboutAppScreen from 'screens/AboutAppScreen/AboutAppScreen'
import { TabRouteNames } from 'types'

interface Tab {
  name: TabRouteNames
  component: (props: any) => ReactElement | null
  isUnmountOnBlur: boolean
  initialParams?: { [key: string]: null }
}

const NAVIGATION_TABS: Tab[] = [
  {
    name: TabRouteNames.ABOUT_APP,
    component: AboutAppScreen,
    isUnmountOnBlur: false,
  },
  {
    name: TabRouteNames.QUOTES,
    component: QuotesScreen,
    isUnmountOnBlur: false,
  },
  // TODO add tabs
]

export default NAVIGATION_TABS
