import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";


function Stripe() {
const [subCom,setSubCom]=React.useState(localStorage.getItem("subId"));
const [mainCom,setMainCom]=React.useState(localStorage.getItem("MainId"));

  async function handleToken(token, addresses) {
  console.log(token,addresses)
  console.log(token.id);
  console.log(token.email)
  const response = await axios.post(
      "http://localhost:8080/api/auth/payment",
      { token:token.id,
      stripeEmail:token.email,
       description: "donation",
      amount:1000},{  headers: {
          'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
      }}
    );
     const { status } = response.data;
    console.log("Response:", response.data);

  }

  return (
    <div >

      <StripeCheckout
        stripeKey="pk_test_51IqXKrCODxqivVp4IFGDZHgK1hpAiVjOIPBPpLkp4w8FdBy5hGrNFeSElguqGQ4sGAsvODzTGGccvzGQAD0JMF7q00jx8SR94K"
        token={handleToken}
        amount={1000}
        name="Visual Garden"
        billingAddress
        shippingAddress
      />
    </div>
  );
}
export default Stripe
