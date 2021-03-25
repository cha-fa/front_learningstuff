import "./Login.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { fetchToLogin } from "stores/authentication/authMiddleware";
import { useTranslation } from "react-i18next";
import loginregisterside from "assets/loginregisterside.jpg";
import {
  Row,
  Col,
  Form,
  FormGroup,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation();
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
      <Container fluid className="Login mt-5 mb-5">
        <Row className="d-flex justify-content-center">
          <Col
            xs={12}
            md={5}
            className="Login__col d-flex flex-column justify-content-center align-items-center"
          >
            <h2>{t("login:good_to_see_you")}</h2>
            <Form
              className="m-5 d-flex flex-column justify-content-around"
              onSubmit={login}
            >
              <FormGroup>
                <FormControl
                  className="p-4 mb-3"
                  type="email"
                  placeholder={t("login:placeholderemail")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  className="p-4 mb-3"
                  type="password"
                  placeholder={t("login:placeholderpassword")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </FormGroup>
              <p className="mb-4">
                {t("login:dont_have_account_yet")}
                <Link to="/register">
                  <span> {t("login:registernow")}</span>
                </Link>
              </p>
              <Button
                type="submit"
                className="ButtonPrimary w-75"
                size="lg"
                block
              >
                {t("login:labelbutton")}
              </Button>
            </Form>
          </Col>
          <Col className="Login__col" xs={12} md={4}>
            <img
              className="sideimage"
              src={loginregisterside}
              alt="login or register, working on a computer"
              width={700}
              height={600}
              mode="fit"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
