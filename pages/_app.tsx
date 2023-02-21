import { AppProps } from "next/app";
import { useApollo } from "@/apollo";
import { ApolloProvider } from "@apollo/client"
import Head from "next/head";

export default function Portfolio({ Component, pageProps }: AppProps) {
  const client = useApollo();
  
  return (
    <ApolloProvider client={client}>
      <Head>
          <title>Fitrah Munir</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
    </ApolloProvider>
  )
}