import Vue from "vue"
import VueApollo from "vue-apollo"
// import createApolloClient from './apollo'
import AWSAppSyncClient from "aws-appsync"
import { Auth } from "aws-amplify"

// Install the vue plugin
Vue.use(VueApollo)

// Config
// const options = {
//   ssr: false,
//   base: process.env.VUE_APP_GRAPHQL_ENDPOINT || 'http://localhost:4000',
//   endpoints: {
//     graphql: process.env.VUE_APP_GRAPHQL_PATH || '/graphql',
//     subscription: process.env.VUE_APP_GRAPHQL_SUBSCRIPTIONS_PATH || '/graphql',
//   },
//   persisting: false,
//   subscriptions: true
// }

// Create apollo client
// export const apolloClient = createApolloClient(options)

const config = {
  url:
    "https://gaxvwie54rbllp3asz2iyyvumu.appsync-api.us-east-1.amazonaws.com/graphql",
  region: "us-east-1",
  auth: {
    type: "AMAZON_COGNITO_USER_POOLS",
    apiKey: null,
    jwtToken: async () =>
      (await Auth.currentSession()).getIdToken().getJwtToken()
  }
}
const options = {
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network"
    }
  }
}

const client = new AWSAppSyncClient(config, options)

export const apolloProvider = new VueApollo({
  defaultClient: client
})
