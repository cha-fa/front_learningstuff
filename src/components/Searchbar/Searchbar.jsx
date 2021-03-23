import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";


const Searchbar = ({ getInput }) => {

  const { t } = useTranslation();
  const handleChange = (e) => {
    getInput(e.target.value);
  };

return (
<div>
  <Form className="m-5" onSubmit={e => { e.preventDefault();}} >
    <Row>
      <Col>
        <Form.Control
         onChange={handleChange}
         type="text"
         placeholder={t("common:placeholderSearch")}
         />
      </Col>
    </Row>
  </Form>
</div>
);
};
  
export default Searchbar;