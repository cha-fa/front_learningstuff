import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useFetch from "hooks/useFetch";
import { Container, Row, Col } from "react-bootstrap";
import Menu from "./Menu/Menu";
import Feed from "./Feed";

const Profile = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [profile, setProfile] = useState(currentUser);

  const { get, data: updatedInfo } = useFetch();

  useEffect(() => {
    get("/profile");
  }, [updatedInfo]);
  
  useEffect(() => {
    if (updatedInfo) {
      setProfile(updatedInfo);
    }
  }, [updatedInfo]);

  return (
    <Container className="Profile">
      <Row>
        <Col md="4" className="d-none d-lg-block">
          <Menu profile={profile} />
        </Col>
        <Col md="8">
          <Feed />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
