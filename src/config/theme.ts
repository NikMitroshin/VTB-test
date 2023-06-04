import { Theme } from '@emotion/react'
import { Dimensions } from 'react-native'

const theme: Theme = {
  colors: {
    text: {
      main: '#000',
      light: '#fff',
    },
    background: {
      main: '#002c5f',
    },
    button: {
      main: '#00aad2',
    },
  },
  isSmall: Dimensions.get('window').height <= 667,
}

export default theme
