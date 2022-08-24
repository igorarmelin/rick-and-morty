import { createGlobalStyle } from "styled-components"

const globalStyle = createGlobalStyle`
  body {
    line-height: normal;
    margin: 0;
    padding: 0;
    background-color: #ECEBF3;
  }

  html,
  body,
  #root {
    width: 100%;
    min-height: 100%;
    height: auto;
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
  }
`

export default globalStyle
