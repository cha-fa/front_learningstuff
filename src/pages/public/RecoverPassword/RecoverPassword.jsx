import "./RecoverPassword.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
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
import {
  displaySuccess,
  displayWarning,
} from "stores/flashmessages/flashMiddleware";
import useFetch from "hooks/useFetch";

const RecoverPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { t } = useTranslation("password");
  const { put } = useFetch();
  const dispatch = useDispatch();
  const history = useHistory();
  const reset_password_token = useLocation().search.split("=")[1];

  const recover = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      dispatch(displayWarning(t("password:password_difference")));
      return;
    }
    const data = {
      user: {
        password: password,
        reset_password_token,
      },
    };
    await put("/password", data);
    dispatch(displaySuccess(t("password:changed")));
    history.push("/login");
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
            <h2>{t("password:new_password")}</h2>
            <Form
              className="m-5 d-flex flex-column justify-content-around"
              onSubmit={recover}
            >
              <FormGroup>
                <FormControl
                  className="p-4 mb-3"
                  type="password"
                  placeholder={t("password:placeholder_new_password")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  className="p-4 mb-3"
                  type="password"
                  placeholder={t("password:placeholder_repeat_new_password")}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
            <Image
              className="sideimage"
              src={logincover}
              alt="Illustration recover password page"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RecoverPassword;
