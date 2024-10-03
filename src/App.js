import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PaystackButton } from "react-paystack";
import "./App.css";

const App = () => {
  const publicKey = "pk_test_270ed590b74cc5344bd39c6d2730e780135e905b";
  // const amount = 1000000;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  // const toast = useToast();

  const resetForm = () => {
    setEmail("");
    setName("");
    setPhone("");
    setAmount("");
  };

  const componentProps = {
    email,
    amount: amount * 100,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: ({ reference }) => {
      toast.success(
        `Your purchase was successful! Transaction reference: ${reference}`,
        { position: "bottom-left" }
      );
      resetForm();
    },
    onClose: () => toast.error("Wait!, don't go!!!!"),
  };

  return (
    <div className="App">
      <div className="container">
        <div>FUNDSVEST</div>
        <div className="checkout">
          <div className="checkout-form">
            <div className="checkout-field">
              <label>Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Phone</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Amount</label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <PaystackButton className="paystack-button" {...componentProps} />
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
