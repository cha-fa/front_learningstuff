import React from "react";
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({ component: Component, currentUser, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        currentUser && currentUser.role === "admin" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default AdminRoute;
