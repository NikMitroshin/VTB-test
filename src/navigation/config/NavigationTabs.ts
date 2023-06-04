import { ReactElement } from 'react'

import MainScreen from 'screens/MainScreen/MainScreen'
import { TabRouteNames } from 'types'

interface Tab {
  name: TabRouteNames
  component: (props: any) => ReactElement | null
  isUnmountOnBlur: boolean
  initialParams?: { [key: string]: null }
}

const NAVIGATION_TABS: Tab[] = [
  {
    name: TabRouteNames.MAIN_SCREEN,
    component: MainScreen,
    isUnmountOnBlur: false,
  },
  // TODO add tabs
]

export default NAVIGATION_TABS
