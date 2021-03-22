import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useFetch from "hooks/useFetch";
import { Container, Row, Col } from "react-bootstrap";
import Menu from "./Menu";
import Feed from "./Feed";

const Profile = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [profile, setProfile] = useState(currentUser);

  const { get, data: updatedInfo } = useFetch();

  useEffect(() => {
    get("/profile");
  }, []);
  
  useEffect(() => {
    if (updatedInfo) {
      setProfile(updatedInfo);
    }
  }, [updatedInfo]);

  return (
    <Container className="Profile my-5">
      <Row>
        <Col md="4">
          <Menu profile={profile} />
        </Col>
        <Col md="8" className="col-8">
          <Feed profile={profile} />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
