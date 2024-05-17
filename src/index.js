import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const clinet = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache(),
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={clinet}>
    <App />
    </ApolloProvider>
);

