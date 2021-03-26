import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({ component: Component, ...rest }) => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        isLogged && isAdmin ? <Component {...props} /> : <Redirect to="/profile/mycourses" />
      }
    />
  );
};

export default AdminRoute;
