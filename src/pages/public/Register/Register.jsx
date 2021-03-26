import "./Register";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { fetchToRegister } from "stores/authentication/authMiddleware";
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

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("student");
  const { t } = useTranslation("register");
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
    <>
      <Container fluid className="Register mt-5 mb-5">
        <Row className="d-flex justify-content-center">
          <Col
            xs={12}
            md={5}
            className="Login__col d-flex flex-column justify-content-center align-items-center"
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
              <FormGroup controlId="selectrole">
                <FormControl
                  as="select"
                  custom
                  value={role}
                  name={t("register:role")}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="student">{t("register:optionstudent")}</option>
                  <option value="teacher">{t("register:optionteacher")}</option>
                  <option value="admin">{t("register:optionadmin")}</option>
                </FormControl>
              </FormGroup>
              <p className="mb-4">
                {t("register:accountquestion")}
                <Link to="/login">
                  <p> {t("register:loginnow")}</p>
                </Link>
              </p>
              <Button
                type="submit"
                className="ButtonPrimary w-75"
                size="lg"
                block
              >
                {t("register:labelbutton")}
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

export default Register;
