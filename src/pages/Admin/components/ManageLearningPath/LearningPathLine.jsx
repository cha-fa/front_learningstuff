import { useEffect, useState, useRef } from "react";
import useFetch from "hooks/useFetch";
import {
  AiOutlineCheckSquare,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { Button, Form } from "react-bootstrap";

const LearninPathLine = ({ learningPath, handleEdit }) => {
  const { t } = useTranslation("admin");
  const { data, error, isLoading, patch, get } = useFetch();
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
        price: price,
      });
      setEditing(false);
      console.log("sending info");
      handleEdit();
    }
  };

  const handleDeleteCourse = (courseId) => {
    patch(`/admin/learning_paths/${learningPath.id}`, {
      deleted_course_id: courseId,
      learning_path: learningPath,
    });
    handleEdit();
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
        {(editing && <input placeholder={title} defaultValue={title} />) ||
          title}{" "}
      </td>
      <td>
        {(editing && (
          <input placeholder={price / 100} defaultValue={price} />
        )) ||
          price}
      </td>
      <td>
        {(editing && (
          <>
            {learningPath.courses.map((course) => (
              <li key={course.id}>
                {course.title}{" "}
                <Button
                  type="button"
                  className="btn-danger"
                  onClick={() => handleDeleteCourse(course.id)}
                >
                  {t("remove_this_course")}
                </Button>
              </li>
            ))}
            <p>Ajouter un cours</p>
            <Form.Control
              as="select"
              onChange={() => setNewCourse(event.target.value)}
            >
              {data &&
                data.map((course) => (
                  <option key={course.id} value={course.id} name={course.title}>
                    {course.title}
                  </option>
                ))}
            </Form.Control>
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
            <AiOutlineCheckSquare onClick={handleClickEdit} size={30} />
          </span>
        )}
      </td>
    </tr>
  );
};

export default LearninPathLine;
