import Router from "./router"
import { ApolloProvider } from "@apollo/client"
import client from "./resources/api/graphql"

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  )
}

export default App
