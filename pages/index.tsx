import React, {useContext, useEffect} from "react";
import AuthContext from '../context/AuthProvider';
import { useCheckoutCreateMutation } from "@/saleor/api";
import { useLocalStorage } from "react-use";

import { ProductCollection, Layout } from "@/components";

const Home = () => {
  const {auth} = useContext(AuthContext);
  console.log('global state',auth);

  const [token, setToken] = useLocalStorage("token");
  const [checkoutCreate, { data, loading }] = useCheckoutCreateMutation();

  useEffect(() => {
    async function doCheckout() {
      const { data } = await checkoutCreate();
      const token = data?.checkoutCreate?.checkout?.token;
      setToken(token);
    }

    doCheckout();
  }, []);


  return (
    <Layout>
      <ProductCollection />
    </Layout>
  );
};

export default Home;