import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HttpLink } from '@apollo/client';
import { useMemo } from "react";

function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({ uri: "http://localhost:1337/graphql", credentials: "same-origin" }),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
      },
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function useApollo() {
  const client = useMemo(() => createApolloClient(), []);
  console.log(process.env);
  return client;
}