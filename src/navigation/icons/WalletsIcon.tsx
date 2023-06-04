import React from 'react'

import { useTheme } from '@emotion/react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  focused: boolean
}

const WalletsIcon: React.FC<Props> = ({ focused }) => {
  const theme = useTheme()
  const stroke = focused ? theme.colors.button.main : theme.colors.text.main

  return (
    <Svg width='24' height='25' fill='none'>
      <Path
        d='M2 7.5h16a3 3 0 013 3v6a3 3 0 01-3 3H5a3 3 0 01-3-3v-9zM2 6.5a3 3 0 013-3h9a3 3 0 013 3v1H2v-1z'
        stroke={stroke}
        strokeWidth='2'
      />
      <Path d='M14.5 12.5a1 1 0 100 2v-2zm2 2a1 1 0 100-2v2zm-2 0h2v-2h-2v2z' fill={stroke} />
    </Svg>
  )
}

export default WalletsIcon
