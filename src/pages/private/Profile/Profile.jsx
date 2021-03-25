import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { displaySuccess } from "stores/flashmessages/flashMiddleware";
import  { useHistory, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { fetchCurrentUser } from "stores/authentication/authMiddleware";
import Cookies from "js-cookie";
import { Container, Row, Col } from "react-bootstrap";
import Menu from "./Menu/Menu";
import Feed from "./Feed/Feed";

const Profile = () => {
  const [userUpdated, setUserUpdated] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const token = Cookies.get("token");
    if(userUpdated){
      dispatch(fetchCurrentUser(token));
    }
    setUserUpdated(false);
    history.push("/profile/mycourses");
  }, [userUpdated]);

  const { search } = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    if (search === "?payment_successful") {
      dispatch(displaySuccess(t("payment:success")));
    }
  }, [search]);

  return (
    <Container className="Profile">
      <Row>
        <Col md="4" className="d-none d-lg-block">
          <Menu />
        </Col>
        <Col md="8">
          <Feed reload={setUserUpdated}/>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
