import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./Searchbar.scss";

const Searchbar = ({ getInput }) => {
  const { t } = useTranslation();
  const handleChange = (e) => {
    getInput(e.target.value);
  };
  return (
    <div className="Searchbar d-flex justify-content-center">
      <Form
        className="w-75 mt-5 mb-5"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Row className="justify-content-center">
          <Col lg={6}>
            <Form.Control
              className="Searchbar__input"
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
