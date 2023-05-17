import React from "react";
import { useCheckoutDeliveryMethodUpdateMutation } from "@/saleor/api";
import Router from "next/router";

function selectmethod() {
  const { ctoken, dID } = Router.query;
  console.log("ctoken : ", ctoken);
  console.log("dID : ", dID);

  const [checkoutDeliveryMethodUpdate, { loading, error }] =
  useCheckoutDeliveryMethodUpdateMutation();
  const { data } = checkoutDeliveryMethodUpdate({
    variables: {
      "dId": dID,
      "ctoken": ctoken,
      locale: "EN"
    },
  });
  console.log("selectmethod data : ", data);

  if (data) {
    Router.push({ pathname: "/payment", query: { ctoken } }, "/payment");
  }

  return <div>select method</div>;
}

export default selectmethod;