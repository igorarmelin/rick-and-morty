import { createGlobalStyle } from "styled-components"

const globalStyle = createGlobalStyle`
  body {
    line-height: normal;
    margin: 0;
    padding: 0;
    background-color: #00bfff;
  }

  html,
  body,
  #root {
    width: 100%;
    min-height: 100%;
    height: auto;
    font-family: 'Montserrat', sans-serif;
  }
`

export default globalStyle
