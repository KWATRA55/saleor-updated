import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useEffect } from "react";
import { useLocalStorage } from "react-use";
import { AuthProvider } from '../context/AuthProvider';
import AuthWrapper from '../context/AuthWrapper';


import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { apolloClient } from "@/lib";
import { useCheckoutCreateMutation } from "@/saleor/api";

const Root = ({ Component, pageProps }: AppProps) => {
  // const [token, setToken] = useLocalStorage("token");
  // const [checkoutCreate, { data, loading }] = useCheckoutCreateMutation();


  // useEffect(() => {
  //   async function doCheckout() {
  //     const { data } = await checkoutCreate();
  //     const token = data?.checkoutCreate?.checkout?.token;
  //     setToken(token);
  //     console.log(token);  
  //   }

  //   doCheckout();
  // }, []);

  return <Component {...pageProps} token={token} />;
};

const MyApp = ({ Component, pageProps }) => (
  <AuthProvider>
    <ApolloProvider client={apolloClient}>
      <AuthWrapper Component={Component} pageProps={pageProps}>
        <Root {...pageProps}/>
      </AuthWrapper>
    </ApolloProvider> 
  </AuthProvider> 
);

export default MyApp;