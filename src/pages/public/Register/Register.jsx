import "./Register";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { fetchToRegister } from "stores/authentication/authMiddleware";
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("student");

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
      <div className="register col-md">
      <h1>Register your new account</h1>
      <form onSubmit={register}>
        <div className="form-group">
          <input
            className="register-input"
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="register-input"
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="register-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="register-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <select
            value={role}
            name="role"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Administrator</option>
          </select>
        </div>
        <p>Already have an account? 
          <Link to="/login">
            <span> Log in now!</span>
          </Link>
        </p>
        <ButtonPrimary type="submit" sizeClass="large" label="Register"/>
      </form>
    </div>
      <div className="col-md"></div>
    </div>
  );
};

export default Register;
