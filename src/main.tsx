import { ApolloProvider } from "@apollo/client"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import GlobalStyle from "./common/styles/globalStyle"
import client from "./resources/api/graphql"
import { Main } from "./templates"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <BrowserRouter>
        <Main>
          <App />
        </Main>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
)
