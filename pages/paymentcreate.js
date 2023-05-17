import React, {useEffect} from 'react'
import { useCheckoutPaymentCreateMutation } from '@/saleor/api';
import Router from "next/router";

function payment() {
  const {ctoken} = Router.query;
  console.log(ctoken);

  const [checkoutPaymentCreate, { loading, error }] = useCheckoutPaymentCreateMutation();

  useEffect(() => {
    const checkoutPaymentCreateMethod = async () => { 
      try {
        const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjEiLCJ0eXAiOiJKV1QifQ.eyJpYXQiOjE2ODQzMDk5NjksIm93bmVyIjoic2FsZW9yIiwiaXNzIjoiaHR0cDovL3Nob3AtYXBpLmFsZ29tb2NrLmluL2dyYXBocWwvIiwiZXhwIjoxNjg0MzEwMjY5LCJ0b2tlbiI6Ik0yYU9pUXpteTVpUSIsImVtYWlsIjoiZGhydXYxMjNAZXhhbXBsZS5jb20iLCJ0eXBlIjoiYWNjZXNzIiwidXNlcl9pZCI6IlZYTmxjam80IiwiaXNfc3RhZmYiOmZhbHNlfQ.Xw8mtT8YkuUrdZ7PjLsfVZvg30jKuwi93ggzsAImfcr844Ktedph1YOLuHAbD0EUlV06DGOj0aSG9z14tRTCIfnnU90xQsTljRDAF6YOS1McXeZZEQ4ieBYT7prlYg-Xg3smtQRtH_IoAEjEox25fiBm_bZ44nY_YKyTJ8yZVuhu80S_OjU5ryNEL2-UFp5b-zvkSPeO65Ig2atSoY-ruKQYvV-AB0xMzFvXrktHYCp4fTEGrD0m3SkmRqIiMcPwjwHOY_gGitB6lU6aVqy92fu2tU3mkWFcq5oIyqzUE8zygvCOBMzXxxBk_TAnODPvrN3kaThpjaPQr_WxXiQPqw";
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