import "./Register";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { fetchToRegister } from "stores/authentication/authMiddleware";
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import { useTranslation } from "react-i18next";
import loginregisterside from "assets/loginregisterside.jpg";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("student");
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();

  const register = async (e) => {
    const data = {
      user: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        role: role,
      },
    };
    e.preventDefault();
    if (await dispatch(fetchToRegister(data))) {
      history.push("/");
    }
  };

  return (
    <div className="row">
      <div className="register col">
      <h2>
        {t("register:title")}
      </h2>
      <form onSubmit={register}>
        <div className="form-group">
          <input
            className="register-input"
            type="text"
            placeholder={t("register:placeholderfirstname")}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="register-input"
            type="text"
            placeholder={t("register:placeholderlastname")}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="register-input"
            type="email"
            placeholder={t("register:placeholderemail")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="register-input"
            type="password"
            placeholder={t("register:placeholderpassword")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <select
            value={role}
            name={t("register:role")}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="student">
              {t("register:optionstudent")}
            </option>
            <option value="teacher">
              {t("register:optionteacher")}
            </option>
            <option value="admin">
              {t("register:optionadmin")}
            </option>
          </select>
        </div>
        <p>{t("register:accountquestion")}
          <Link to="/login">
            <span> {t("register:loginnow")}</span>
          </Link>
        </p>
        <ButtonPrimary type="submit" sizeClass="large" label={t("register:labelbutton")}/>
      </form>
    </div>
      <div className="col">
        <img className="sideimage" 
          src={loginregisterside} 
          alt="login or register, working on a computer"
          width={700} 
          height={600} 
          mode='fit'
        />
      </div>
    </div>
  );
};

export default Register;
