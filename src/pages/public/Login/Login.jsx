import "./Login.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { fetchToLogin } from "stores/authentication/authMiddleware";
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import { useTranslation } from "react-i18next";
import loginregisterside from "assets/loginregisterside.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

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
      <Row>
        <Col className="login">
          <h2>
            {t("login:title")}
          </h2>
          <Form onSubmit={login}>
            <FormGroup>
              <FormControl
                type="email"
                placeholder={t("login:placeholderemail")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                type="password"
                placeholder={t("login:placeholderpassword")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormGroup>
              <p>
                {t("login:accountquestion")}
                <Link to="/register" >
                  <span> {t("login:registernow")}</span>
                </Link>
              </p>
            <Button type="submit" className="ButtonPrimary" size="lg" block>{t("login:labelbutton")}</Button>
          </Form>
        </Col>
        <div className="col-md">
          <img className="sideimage" 
            src={loginregisterside} 
            alt="login or register, working on a computer"
            width={700} 
            height={600} 
            mode='fit'
          />
        </div>
      </Row>
    </>
  );
};

export default Login;
