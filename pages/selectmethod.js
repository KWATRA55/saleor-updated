import React, { useEffect, useContext  } from "react";
import { useCheckoutDeliveryMethodUpdateMutation } from "@/saleor/api";
import Router from "next/router";


function selectmethod() {
  //const { ctoken, dID } = Router.query;
  //console.log("ctoken from global state : ", auth.ctoken)

  const ctoken = localStorage.getItem("ctoken");
  const dID = localStorage.getItem("dID");

  console.log("ctoken : ", ctoken);
  console.log("dID : ", dID);

  const [checkoutDeliveryMethodUpdate, { loading, error }] = useCheckoutDeliveryMethodUpdateMutation();

  useEffect(() => {
    const updateDeliveryMethod = async () => {
      try {
        const { data } = await checkoutDeliveryMethodUpdate({
          variables: {
            dId: dID,
            ctoken: ctoken,
            locale: "EN",
          },
        });
        console.log("selectmethod data: ", data);
        if (data) {
          Router.push({ pathname: "/paymentcreate", query: { ctoken } }, "/paymentcreate");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    updateDeliveryMethod();
  }, []);


  return <div>select method</div>;
}

export default selectmethod;