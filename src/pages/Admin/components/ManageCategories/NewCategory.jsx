import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Form  from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import useFetch from "hooks/useFetch";

const NewCategory = ({handleEdit}) => {
  const { t } = useTranslation("admin");
  const [creating, setCreating] = useState(false);
  const [title, setTitle] = useState(false);
  const { post } = useFetch();

  const handleClick =() => {
    if (!creating) {
      setCreating(true);
    } else {
      post(
        "/admin/categories",
        {title: title},
        handleEdit
      );
      setCreating(false);
    }
  };

return (
  <div className="NewCategory">
    {(creating) && (
      <>
        <Form>
          <Row>
            <Col>
              <Form.Label>{t("title")}</Form.Label>
              <Form.Control
                placeholder={t("title")}
                onChange={() => setTitle(event.target.value)}
              />
            </Col>
          </Row>
        </Form>
      </>
    )}
    <Button
      className="btn btn-primary btn-lg m-3"
      onClick={handleClick}
    >
      {((!creating) && t("create_category")) || t("validate_creation")}
    </Button>
    {creating && (
      <Button
        className="btn btn-danger btn-lg m-3"
        onClick={() => setCreating(false)}
      >
        {t("cancel_creation")}
      </Button>
    )}  
  </div>
  );
};
    
export default NewCategory;