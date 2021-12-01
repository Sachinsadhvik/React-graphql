import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});
render(
<BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter> ,
  document.getElementById('root'),
);



