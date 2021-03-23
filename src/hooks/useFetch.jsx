import { useState } from "react";
import Cookies from "js-cookie";
import {
  displaySuccess,
  displayError,
} from "stores/flashmessages/flashMiddleware";
import { useDispatch } from "react-redux";

const useFetch = () => {
  // eslint-disable-next-line no-undef
  const API_URL = process.env.REACT_APP_API_URL;
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const get = async (query) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL + query, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();

      if (!response.ok) {
        throw responseData;
      }
      setData(responseData);
      setIsLoading(false);
      return responseData;
    } catch (error) {
      const errMessage = error.error ? error.error : "An error has occured";
      setError(errMessage);
      console.log(errMessage);
    }
  };

  const post = async (query, userData, callback) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL + query, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw responseData;
      }
      setIsLoading(false);
      if (callback) {
        callback();
      }
      return responseData;
    } catch (error) {
      const errMessage = error.errors ? error.errors : "An error has occurred.";
      setError(errMessage);
      console.log(errMessage);
    }
  };

  const postAvatar = async (query, userData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL + query, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
          Accept: "application/json",
        },
        body: userData,
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw responseData;
      }
      setData(responseData);
      setIsLoading(false);
      return responseData;
    } catch (error) {
      const errMessage = error.errors ? error.errors : "An error has occurred.";
      setError(errMessage);
      console.log(errMessage);
    }
  };

  const put = async (query, userData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL + query, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw responseData;
      }
      setData(responseData);
      setIsLoading(false);
      return responseData;
    } catch (error) {
      const errMessage = error.errors ? error.errors : "An error has occurred.";
      setError(errMessage);
      console.log(errMessage);
    }
  };

  const patch = async (query, userData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL + query, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw responseData;
      }
      setData(responseData);
      setIsLoading(false);
      return responseData;
    } catch (error) {
      const errMessage = error.errors ? error.errors : "An error has occurred.";
      setError(errMessage);
      console.log(errMessage);
    }
  };

  const destroy = (query, callback) => {
    setIsLoading(true);
    setError(null);

    fetch(API_URL + query, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    }).then((response) => {
      setIsLoading(false);
      if (response.ok) {
        dispatch(displaySuccess("All good!"));
        if (callback) {
          callback();
        }
      } else {
        dispatch(displayError("Oops, something bad happened! "));
        setError("Une erreur est survenue");
      }
    });
  };

  return {
    data,
    error,
    isLoading,
    get,
    post,
    postAvatar,
    put,
    patch,
    destroy,
  };
};
export default useFetch;
