import "./Register";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { fetchToRegister } from "stores/authentication/authMiddleware";
import { useTranslation } from "react-i18next";
import loginregisterside from "assets/loginregisterside.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

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
    <Row>
      <Col className="register">
        <h2>
          {t("register:title")}
        </h2>
        <Form onSubmit={register}>
          <FormGroup>
            <FormControl
              type="text"
              placeholder={t("register:placeholderfirstname")}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="text"
              placeholder={t("register:placeholderlastname")}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="email"
              placeholder={t("register:placeholderemail")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="password"
              placeholder={t("register:placeholderpassword")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup controlId="selectrole">
            <FormControl as="select" custom
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
            </FormControl>
          </FormGroup>
          <p>{t("register:accountquestion")}
            <Link to="/login">
              <span> {t("register:loginnow")}</span>
            </Link>
          </p>
          <Button type="submit" className="ButtonPrimary" size="lg" block>{t("register:labelbutton")}</Button>
        </Form>
      </Col>
      <Col>
        <img className="sideimage" 
          src={loginregisterside} 
          alt="login or register, working on a computer"
          width={700} 
          height={600} 
          mode='fit'
        />
      </Col>
    </Row>
  );
};

export default Register;
