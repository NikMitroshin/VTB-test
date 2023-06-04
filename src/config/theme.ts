import { Theme } from '@emotion/react'
import { Dimensions } from 'react-native'

const theme: Theme = {
  colors: {
    text: {
      main: '#000',
      light: '#fff',
      success: '#29dc10',
      error: '#ea2626',
    },
    background: {
      main: 'rgb(10, 40, 150)',
      secondary: 'rgb(0, 126, 233)',
      light: '#f1f1f1',
    },
    border: {
      main: 'rgb(212, 215, 223)',
    },
    button: {
      main: 'rgb(0, 132, 255)',
      disable: 'rgb(96, 105, 129)',
    },
  },
  isSmall: Dimensions.get('window').height <= 667,
}

export default theme
