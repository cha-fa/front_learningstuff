import "./Login.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { fetchToLogin } from "stores/authentication/authMiddleware";
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import { useTranslation } from "react-i18next";
import loginregisterside from "assets/loginregisterside.jpg";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {t} = useTranslation();
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
          <h2>
            {t("login:title")}
          </h2>
          <form onSubmit={login}>
            <input
              type="email"
              placeholder={t("login:placeholderemail")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder={t("login:placeholderpassword")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p>
              {t("login:accountquestion")}
              <Link to="/register" >
                <span> {t("login:registernow")}</span>
              </Link>
            </p>
            <ButtonPrimary type="submit" sizeClass="large" label={t("login:labelbutton")}/>
          </form>
        </div>
        <div className="col-md">
          <img className="sideimage" 
            src={loginregisterside} 
            alt="login or register, working on a computer"
            width={700} 
            height={600} 
            mode='fit'
          />
        </div>
      </div>
    </>
  );
};

export default Login;
