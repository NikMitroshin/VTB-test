import React from 'react'

import HistoryIcon from 'navigation/icons/HistoryIcon'
import { TabRouteNames } from 'types'

interface Params {
  focused: boolean
  name: string
}

export const getTabBarIcon = ({ focused, name }: Params): JSX.Element | undefined => {
  switch (name) {
    case TabRouteNames.MAIN_SCREEN:
      return <HistoryIcon focused={focused} />
    default:
      return undefined
  }
}
