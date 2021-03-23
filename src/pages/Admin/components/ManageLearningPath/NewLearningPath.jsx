import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import useFetch from "hooks/useFetch";
import { useTranslation } from "react-i18next";

const NewLearningPath = ({ handleEdit }) => {
  const [creating, setCreating] = useState(false);
  const { get, data, post } = useFetch();
  const [selectedCourses, setselectedCourses] = useState([]);
  const [title, setTitle] = useState();
  const [priceInCents, setPriceInCents] = useState();
  const { t } = useTranslation("admin");

  const handleClick = () => {
    if (!creating) {
      setCreating(true);
    } else {
      post(
        "/admin/learning_paths",
        {
          selected_courses_ids: selectedCourses.join(),
          title: title,
          price_in_cents: priceInCents,
        },
        handleEdit
      );
      setCreating(false);
    }
  };

  const handleCheckboxesCourses = (event) => {
    if (event.target.checked) {
      setselectedCourses([...selectedCourses, event.target.value]);
    } else {
      setselectedCourses(
        selectedCourses.filter((course) => course !== event.target.value)
      );
    }
  };

  useEffect(() => {
    get("/courses");
    return;
  }, []);

  return (
    <div className="NewLearningPath">
      {creating && (
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
              <Col>
                <Form.Label>{t("price_in_cents")}</Form.Label>
                <Form.Control
                  type="number"
                  pattern="[0-9]"
                  placeholder={t("price_in_cents")}
                  onChange={() => setPriceInCents(event.target.value)}
                />
              </Col>
            </Row>
            <Form.Label className="mt-3">{t("add_courses")} :</Form.Label>
            <div key={"inline-checkbox"} className="mb-3">
              {data &&
                data.map((course) => (
                  <Form.Check
                    key={course.id}
                    inline
                    label={course.title}
                    type="checkbox"
                    value={course.id}
                    onChange={handleCheckboxesCourses}
                  />
                ))}
            </div>
          </Form>
        </>
      )}
      {
        <button
          type="button"
          className="btn btn-primary btn-lg m-3 "
          onClick={handleClick}
        >
          {(!creating && t("create_learning_path")) || t("validate_creation")}
        </button>
      }
      {creating && (
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => setCreating(false)}
        >
          {t("cancel_creation")}
        </button>
      )}
    </div>
  );
};

export default NewLearningPath;
