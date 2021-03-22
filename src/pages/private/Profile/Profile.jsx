import { useState, useEffect } from "react";
import useFetch from "hooks/useFetch";
import { Container, Row, Col } from "react-bootstrap";
import Menu from "./Menu/Menu";
import Feed from "./Feed/Feed";

const Profile = () => {
  const [userUpdated, setUserUpdated] = useState(false);
  const { get } = useFetch();

  useEffect(() => {
    if(userUpdated)
      get("/profile");
    setUserUpdated(false);
  }, [userUpdated]);

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
