import React from "react";
import { Col, Form, Row } from "react-bootstrap";



const SearchbarLearningPath = ({ getInput }) => {

  const handleChange = (e) => {
    getInput(e.target.value);
  };

return (
<div className='SearchbarLearningPath'>
  <Form className="m-5" >
    <Row>
      <Col>
        <Form.Control
         onChange={handleChange}
         type="text"
         placeholder="Search LearningPath"
         />
      </Col>
    </Row>
  </Form>
</div>
);
};
  
export default SearchbarLearningPath;