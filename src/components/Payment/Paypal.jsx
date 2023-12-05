import React from 'react'
// import Checkout from './Checkout';
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const initialOptions = {
  "client-id": "YOUR-CLIENT-ID-HERE",
  currency: "USD",
  intent: "capture",
};

function Paypal() {
  return (
    <div>
      <p>Paypal</p>
        {/* <PayPalScriptProvider options={initialOptions}>
        <Checkout/>
    </PayPalScriptProvider> */}
    </div>
  )
}

export default Paypal