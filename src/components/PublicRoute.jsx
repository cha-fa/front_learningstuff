import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        isLogged && restricted ? (
          <Redirect to="/profile/mycourses" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
