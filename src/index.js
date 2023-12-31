import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import client from './graphql/client';
import { ApolloProvider } from '@apollo/client';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);



// Path: src/App.js






