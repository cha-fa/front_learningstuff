import "./Register.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { fetchToRegister } from "stores/authentication/authMiddleware";
import { useTranslation } from "react-i18next";
import registercover from "assets/covers/register.svg";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  FormGroup,
  FormControl,
  Button,
} from "react-bootstrap";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();

  const register = async (e) => {
    const data = {
      user: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      },
    };
    e.preventDefault();
    if (await dispatch(fetchToRegister(data))) {
      history.push("/");
    }
  };

  return (
    <Container fluid className="Register">
      <Row>
        <Col
          xs={12}
          md={6}
          className="Register_col d-flex flex-column justify-content-center align-items-center"
        >
          <h2>{t("register:title")}</h2>
          <Form
            className="m-5 d-flex flex-column justify-content-around"
            onSubmit={register}
          >
            <FormGroup>
              <FormControl
                className="p-4 mb-3"
                type="text"
                placeholder={t("register:placeholderfirstname")}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                className="p-4 mb-3"
                type="text"
                placeholder={t("register:placeholderlastname")}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                className="p-4 mb-3"
                type="email"
                placeholder={t("register:placeholderemail")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                className="p-4 mb-3"
                type="password"
                placeholder={t("register:placeholderpassword")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormGroup>
            <p className="mb-4">
              {t("register:accountquestion")}
              <Link to="/login">
                <span> {t("register:loginnow")}</span>
              </Link>
            </p>
            <Button
              type="submit"
              className="ButtonPrimary w-75 mx-auto"
              size="lg"
              block
            >
              {t("register:labelbutton")}
            </Button>
          </Form>
        </Col>
        <Col
          md={6}
          className="Register_col d-none d-lg-block text-center">
          <Image
            src={registercover}
            alt="Illustration register page"
            height={600}
              />
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
