import React from "react";
import {
  Col,
  Row,
  Nav,
  Container,
  Modal,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

const LessonVideoSteps = () => {
  return (
    <ListGroup className="LessonVideoSteps list-group-flush">
      <ListGroupItem className="d-flex">
        Cras justo odio <span className="ml-auto">00:05:18</span>
      </ListGroupItem>
      <ListGroupItem className="d-flex">
        Dapibus ac facilisis in <span className="ml-auto">00:11:54</span>
      </ListGroupItem>
      <ListGroupItem className="d-flex">
        Vestibulum at eros <span className="ml-auto">00:20:58</span>
      </ListGroupItem>
      <ListGroupItem className="d-flex">
        Dolor sit amet <span className="ml-auto">00:28:04</span>
      </ListGroupItem>
    </ListGroup>
  );
};

export default LessonVideoSteps;
