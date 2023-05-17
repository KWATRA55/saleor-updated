import React, {useEffect} from 'react'
import { useCheckoutPaymentCreateMutation } from '@/saleor/api';
import Router from "next/router";

async function payment() {
  const {ctoken} = Router.query;

  const [checkoutPaymentCreate, { loading, error }] = useCheckoutPaymentCreateMutation();

  useEffect(() => {
    const checkoutPaymentCreateMethod = async () => {
      try {
        const { data } = await checkoutPaymentCreate({
          variables: {
            ctoken: ctoken,
          },
        });
        console.log("payment create data : ", data);
        // if (data) {
        //   Router.push({ pathname: "/paymentcreate", query: { ctoken } }, "/paymentcreate");
        // }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    checkoutPaymentCreateMethod();
  }, [checkoutPaymentCreate, ctoken]);

  return (

    <div>
        Payment
    </div>
  )
}

export default payment