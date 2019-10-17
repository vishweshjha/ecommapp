import React from "react";

import StripeChekout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey = "pk_test_MA6mTmk35ps1AHIDHj54pQSI00xFSJER3g";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeChekout
      label='Pay Now'
      name='Ecomm App'
      shippingAddress
      billingAddress
      description={`your total is  $ ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
