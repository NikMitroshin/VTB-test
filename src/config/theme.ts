import { Theme } from '@emotion/react'
import { Dimensions } from 'react-native'

const theme: Theme = {
  colors: {
    text: {
      main: '#000',
      light: '#fff',
    },
    background: {
      main: 'rgb(10, 40, 150)',
      secondary: 'rgb(0, 126, 233)',
    },
    button: {
      main: 'rgb(0, 132, 255)',
      disable: 'rgb(96, 105, 129)',
    },
  },
  isSmall: Dimensions.get('window').height <= 667,
}

export default theme
