import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      text: {
        main: string
        light: string
        success: string
        error: string
      }
      background: {
        main: string
        secondary: string
        light: string
      }
      border: {
        main: string
      }
      button: {
        main: string
        disable: string
      }
    }
    isSmall: boolean
  }
}
