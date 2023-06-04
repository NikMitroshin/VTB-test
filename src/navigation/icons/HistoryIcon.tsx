import React from 'react'

import { useTheme } from '@emotion/react'
import Svg, { Path, Rect } from 'react-native-svg'

interface Props {
  focused: boolean
}

const HistoryIcon: React.FC<Props> = ({ focused }) => {
  const theme = useTheme()
  const stroke = focused ? theme.colors.button.main : theme.colors.text.main

  return (
    <Svg width='24' height='24' fill='none'>
      <Rect x='3' y='5' width='17' height='16' rx='4' stroke={stroke} strokeWidth='2' />
      <Path d='M15 3v4' stroke={stroke} strokeWidth='2' strokeLinecap='round' />
      <Path d='M2 11h18.5' stroke={stroke} strokeWidth='2' />
      <Path d='M8 3v4' stroke={stroke} strokeWidth='2' strokeLinecap='round' />
    </Svg>
  )
}

export default HistoryIcon
