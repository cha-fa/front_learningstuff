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

  const get = (query) => {
    setIsLoading(true);
    setError(null);

    fetch(API_URL + query, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          dispatch(displayError("Oops, something bad happened! "));
          setError("An unexpected error occurred.");
        }
      })
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const post = (query, userData) => {
    setIsLoading(true);
    setError(null);

    fetch(API_URL + query, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.statusCode >= 500) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((responseData) => {
        if (responseData.errors) {
          setError(responseData.errors);
          throw new Error(responseData.errors);
        }
        dispatch(displaySuccess("All good!"));
        setIsLoading(false);
      })
      .catch((error) => {
        dispatch(displayError(error));
        console.log(error);
      });
  };

  const put = (query, userData) => {
    setIsLoading(true);
    setError(null);

    fetch(API_URL + query, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          dispatch(displaySuccess("All good!"));
          return response.json();
        } else {
          dispatch(displayError("Oops, something bad happened!"));
          setError("An unexpected error occurred.");
        }
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const patch = (query, userData) => {
    setIsLoading(true);
    setError(null);

    fetch(API_URL + query, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          dispatch(displaySuccess("All good!"));
          return response.json();
        } else {
          dispatch(displayError("Oops, something bad happened! "));
          setError("An unexpected error occurred.");
        }
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
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
    })
      .then((response) => {
        setIsLoading(false);
        if (response.ok) {
          dispatch(displaySuccess("All good!"));
          if (callback){
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
    put,
    patch,
    destroy,
  };
};
export default useFetch;
