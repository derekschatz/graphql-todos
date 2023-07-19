import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://together-mole-98.hasura.app/v1/graphql',
    headers: {
      'x-hasura-admin-secret':'BCEmLT7c0iJBEwIUC1eSeBSbujZXH0i46aAHDQdDp5YaNVf2dFsFEqZ54zP9RDaN'
    },
    cache: new InMemoryCache(),
  });
  


export default client;
  
  
  
