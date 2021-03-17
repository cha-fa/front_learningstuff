import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchToLogout } from "stores/authentication/authMiddleware";
import { Navbar } from "react-bootstrap";
import "./Nav.scss";

const Nav = () => {
  const token = useSelector((state) => state.auth.token);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(fetchToLogout(token));
    history.push("/");
  };
  return (
    <Navbar>
      <div className=" d-flex mr-auto p-2">
        <h1>Learning</h1> 
        <h1>Stuff</h1>
      </div>
      <nav>
        <div className="row align-items-center">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/">Courses</Link>
        <Link className="nav-link" to="/">Blog</Link>
        <Link className="nav-link" to="/">About Us</Link>
        <Link className="nav-link" to="/">Contact Us</Link>
        <Link className="nav-link" to="/">Cart</Link>
        
        <div className="d-flex">
        {!currentUser && (
          <>
            <Link className="nav-link" to="/login"> Login  </Link>
            <Link  className="nav-link" to="/register">Register</Link>
          </>
        )}
        {currentUser && (
          <>
            <Link to="/profile">Profile</Link>
            <button onClick={logout} type="button">
              Se déconnecter
            </button>
          </>
        )}
        </div>
       </div>
      </nav>
    </Navbar>
  );
};

export default Nav;
