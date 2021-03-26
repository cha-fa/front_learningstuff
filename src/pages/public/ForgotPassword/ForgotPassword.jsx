import "./ForgotPassword.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logincover from "assets/covers/login.svg";
import {
  Row,
  Col,
  Form,
  FormGroup,
  FormControl,
  Button,
  Container,
  Image,
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
    <Container fluid className="ForgotPassword">
      <Row>
        <Col
          xs={12}
          md={6}
          className="ForgotPassword_col d-flex flex-column justify-content-center align-items-center"
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
        <Col
          md={6}
          className="ForgotPassword_col d-none d-lg-block text-center">
            <Image
              src={logincover}
              alt="Illustration forgot password page"
              height={600}
            />
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
