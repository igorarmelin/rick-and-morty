import { ApolloProvider } from "@apollo/client"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import GlobalStyle from "./common/styles/globalStyle"
import client from "./resources/api/graphql"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
