import * as authActions from "./authActions";
import { displaySuccess, displayError } from "../flashmessages/flashMiddleware";

import Cookies from "js-cookie";

export const fetchToRegister = (data) => {
  return async (dispatch) => {
    const API_URL = process.env.REACT_APP_API_URL;
    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        console.log("Une erreur est survenue:", response.statusText);
        dispatch(authActions.registerFail());
        Cookies.remove("token");
        dispatch(displayError("Erreur d'enregistrement"));
        return false;
      }
      const token = await response.headers.get("authorization").split(" ")[1];
      const user = await response.json();
      const userToRegister = { token, user };
      dispatch(authActions.registerSuccess(userToRegister));
      Cookies.set("token", token);
      dispatch(displaySuccess("Inscription réussie"));
      return true;
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchToLogin = (data) => {
  return async (dispatch) => {
    const API_URL = process.env.REACT_APP_API_URL;
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        console.log("Une erreur est survenue:", response.statusText);
        dispatch(authActions.loginFail());
        Cookies.remove("token");
        dispatch(displayError("Aucun utilisateur correspondant"));
        return false;
      }
      const token = await response.headers.get("authorization").split(" ")[1];
      const user = await response.json();
      const userToLog = { token, user };
      dispatch(authActions.loginSuccess(userToLog));
      Cookies.set("token", token);
      dispatch(displaySuccess("Connexion réussie"));
      return true;
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCurrentUser = (token) => {
  return async (dispatch) => {
    const API_URL = process.env.REACT_APP_API_URL;
    try {
      const response = await fetch(`${API_URL}/api/profile`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const user = await response.json();
      const userToLoad = { token, user };
      dispatch(authActions.loadCurrentUser(userToLoad));
    } catch (error) {
      console.log(error);
      dispatch(authActions.loginFail());
      Cookies.remove("token");
    }
  };
};

export const fetchToLogout = (token) => {
  return async (dispatch) => {
    const API_URL = process.env.REACT_APP_API_URL;
    try {
      const response = await fetch(`${API_URL}/logout`, {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(authActions.logoutSuccess());
      Cookies.remove("token");
      dispatch(displaySuccess("Déconnexion réussie"));
    } catch (error) {
      console.log(error);
      dispatch(authActions.logoutFail());
      dispatch(
        displayError(
          "Un problème est survenu, merci de réessayer ultérieurement"
        )
      );
      return false;
    }
  };
};
