import { useState } from "react";
import useFetch from "hooks/useFetch";
import { AiFillCheckCircle, AiOutlineEdit } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { Button, Form, Row, Col } from "react-bootstrap";
import AddCategories from "./AddCategories";

const LearningPathLine = ({ learningPath, handleEdit }) => {
  const { t } = useTranslation("admin");
  const { data, patch, get } = useFetch();
  const [title, setTitle] = useState(learningPath.title);
  const [price, setPrice] = useState(learningPath.price_in_cents);
  const [newCourse, setNewCourse] = useState();
  const [editing, setEditing] = useState(false);

  const handleClickEdit = () => {
    if (!editing) {
      get("/courses");
      setEditing(true);
    } else {
      patch(`/admin/learning_paths/${learningPath.id}`, {
        title: title,
        price_in_cents: price,
      });
      setEditing(false);
      handleEdit();
    }
  };

  const handleDeleteCourse = (courseId) => {
    if (window.confirm(t("are_you_sure"))) {
      patch(`/admin/learning_paths/${learningPath.id}`, {
        deleted_course_id: courseId,
        learning_path: learningPath,
      });
      handleEdit();
    }
  };

  const handleAddCourse = () => {
    patch(`/admin/learning_paths/${learningPath.id}`, {
      added_course_id: newCourse,
      learning_path: learningPath,
    });
    handleEdit();
  };

  return (
    <tr key={learningPath.id}>
      <td>{learningPath.id}</td>
      <td>
        {(editing && (
          <>
            <input
              placeholder={title}
              defaultValue={title}
              onChange={() => setTitle(event.target.value)}
            />
              <AddCategories 
                learningPath={learningPath}
              />
          </>
        )) || (
          <>
            {title}
            <ul>
              {(learningPath.categories && (
                learningPath.categories.map((category) =>(
                  <li key={category.id}><small>{category.title}</small></li>
              ))))}
            </ul>
          </>
        )}
        
      </td>
      <td>
        {(editing && (
          <input
            placeholder={price / 100}
            defaultValue={price}
            onChange={() => setPrice(event.target.value)}
          />
        )) ||
          price / 100 + "€"}
      </td>
      <td>
        {(editing && (
          <>
            {learningPath.courses.map((course) => (
              <li className="mb-2" key={course.id}>
                {course.title}{" "}
                <Button
                  type="button"
                  className="btn-sm btn-danger ml-4"
                  onClick={() => handleDeleteCourse(course.id)}
                >
                  {t("remove_this_course")}
                </Button>
              </li>
            ))}
            <Form className="mt-5">
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="3">
                  {t("add_a_course")} :
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    column
                    sm="10"
                    as="select"
                    onChange={() => setNewCourse(event.target.value)}
                  >
                    {data &&
                      data
                        .filter(
                          (course) =>
                            !learningPath.courses
                              .map((course) => course.id)
                              .includes(course.id)
                        )
                        .map((course) => (
                          <option
                            key={course.id}
                            value={course.id}
                            name={course.title}
                          >
                            {course.title}
                          </option>
                        ))}
                  </Form.Control>
                </Col>
              </Form.Group>
            </Form>
            <Button type="submit" onClick={handleAddCourse}>
              {t("validate_add")}
            </Button>
          </>
        )) ||
          learningPath.courses.map((course) => (
            <li key={course.id}>{course.title}</li>
          ))}
      </td>
      <td>
        {(!editing && (
          <span className="ml-3">
            <AiOutlineEdit
              size={30}
              onClick={handleClickEdit}
              style={{ color: "orange" }}
            />
          </span>
        )) || (
          <span className="ml-3">
            <AiFillCheckCircle
              onClick={handleClickEdit}
              size={30}
              style={{ color: "green" }}
            />
          </span>
        )}
      </td>
    </tr>
  );
};

export default LearningPathLine;
