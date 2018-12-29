import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo'
import { render } from "react-dom";

const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

render(
  <ApolloProvider client={client}>
    <h2>My first Apollo app 🚀</h2>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();