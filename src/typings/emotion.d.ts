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
      }
      button: {
        main: string
      }
    }
    isSmall: boolean
  }
}
