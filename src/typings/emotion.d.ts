import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      text: {
        main: string
        light: string
      }
      background: {
        main: string
        secondary: string
        light: string
      }
      button: {
        main: string
        disable: string
      }
    }
    isSmall: boolean
  }
}
