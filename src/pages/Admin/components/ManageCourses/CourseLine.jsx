import useFetch from "hooks/useFetch";
import { AiFillCloseCircle } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const CourseLine = ({ course, handleEdit }) => {
  const { t } = useTranslation("admin");
  const { data, error, isLoading, destroy } = useFetch();

  const handleDeleteCourse = (courseId) => {
    if (window.confirm(t("are_you_sure"))) {
      destroy(`/admin/courses/${courseId}`, handleEdit);
    }
  };

  return (
    <tr key={course.id}>
      <td>{course.id}</td>
      <td>{course.title} </td>

      <td>
        {course.learning_paths.map((learning_path) => (
          <li key={learning_path.id}>{learning_path.title}</li>
        ))}
      </td>
      <td>
        {" "}
        <AiFillCloseCircle
          size={30}
          style={{ color: "red" }}
          onClick={() => handleDeleteCourse(course.id)}
        />
      </td>
    </tr>
  );
};

export default CourseLine;
