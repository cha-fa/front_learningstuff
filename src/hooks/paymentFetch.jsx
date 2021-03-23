import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import Cookies from "js-cookie";

const paymentFetch = () => {
  const API_KEY = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
  const STRIPE_PROMISE = loadStripe(API_KEY);
  const API_URL = process.env.REACT_APP_API_URL;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const newPayment = async (total, learningPath) => {
    setIsLoading(true);
    setError(null);

    const stripe = await STRIPE_PROMISE;
    const NEW_PAYMENT_URL = API_URL + "/stripe/one_time_payments";

    try {
      const response = await fetch(NEW_PAYMENT_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          total: total,
          learningPath: learningPath,
        }),
      });

      const session = await response.json();

      if (!response.ok) {
        throw session;
      }
      setIsLoading(false);
      await stripe.redirectToCheckout({
        sessionId: session.id,
      });
    } catch (error) {
      const errMessage = error.errors ? error.errors : "An error has occurred.";
      setError(errMessage);
      console.log(errMessage);
    }
  };

  return {
    isLoading,
    error,
    newPayment,
  };
};

export default paymentFetch;
