import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchToLogout } from "stores/authentication/authMiddleware";

const Navbar = () => {
  const token = useSelector((state) => state.auth.token);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(fetchToLogout(token));
    history.push("/");
  };
  return (
    <div className="Navbar">
      <h1>Navbar</h1>
      <nav>
        <Link to="/">Home</Link>
        {!currentUser && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
        {currentUser && (
          <>
            <Link to="/profile">Profile</Link>
            <button onClick={logout}>Se déconnecter</button>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
