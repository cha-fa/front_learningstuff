import "./Login.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { fetchToLogin } from "stores/authentication/authMiddleware";
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const login = async (e) => {
    const data = {
      user: {
        email: email,
        password: password,
      },
    };
    e.preventDefault();
    if (await dispatch(fetchToLogin(data))) {
      history.push("/");
    }
  };

  return (
    <>
      <div className="row">
        <div className="login col-md">
          <h2>Log in to your account</h2>
          <form onSubmit={login}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p>have an account yet? 
              <Link to="/register" >
                <span> Register now!</span>
              </Link>
            </p>
            <ButtonPrimary type="submit" sizeClass="large" label="log in"/>
          </form>
        </div>
        <div className="col-md"></div>
      </div>
    </>
  );
};

export default Login;
