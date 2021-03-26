import "./ForgotPassword.scss";
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
import useFetch from "hooks/useFetch";
import { displaySuccess } from "stores/flashmessages/flashMiddleware";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { t } = useTranslation();
  const { post } = useFetch();
  const dispatch = useDispatch();

  const forgot = async (e) => {
    e.preventDefault();
    const data = {
      user: {
        email: email,
      },
    };
    await post("/password", data);
    dispatch(displaySuccess(t("password:reset_send")));
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
            <h2>{t("password:title")}</h2>
            <Form
              className="m-5 d-flex flex-column justify-content-around"
              onSubmit={forgot}
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
              <Button
                type="submit"
                className="ButtonPrimary w-75"
                size="lg"
                block
              >
                {t("password:submit")}
              </Button>
              <p className="mt-4">
                {t("register:accountquestion")}
                <Link to="/login">
                  <span> {t("register:loginnow")}</span>
                </Link>
              </p>
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

export default ForgotPassword;
