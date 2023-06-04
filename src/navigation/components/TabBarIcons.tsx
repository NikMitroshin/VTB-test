import React from 'react'

import HistoryIcon from 'navigation/icons/HistoryIcon'
import { TabRouteNames } from 'types'

interface Params {
  focused: boolean
  name: string
}

export const getTabBarIcon = ({ focused, name }: Params): JSX.Element | undefined => {
  switch (name) {
    case TabRouteNames.ABOUT_APP:
      return <HistoryIcon focused={focused} />
    case TabRouteNames.QUOTES:
      return <HistoryIcon focused={focused} />
    default:
      return undefined
  }
}
