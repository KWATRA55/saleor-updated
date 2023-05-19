import React, {useEffect} from 'react'
import { useCheckoutPaymentCreateMutation } from '@/saleor/api';
import Router from "next/router";

function payment() {
  const {ctoken} = Router.query;
  console.log(ctoken);

  const [checkoutPaymentCreate, { loading, error }] = useCheckoutPaymentCreateMutation();

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const checkoutPaymentCreateMethod = async () => { 
      try {
        const token = accessToken;
        const { data } = await checkoutPaymentCreate({
          variables: {
            ctoken: ctoken,
            locale: "EN"
          },
          context: {
            headers: {
              Authorization: `Bearer ${token}`,
            },
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
  }, []);

  return (

    <div>
        Payment
    </div>
  )
}

export default payment