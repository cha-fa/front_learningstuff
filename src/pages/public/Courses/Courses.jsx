import useFetch from "hooks/useFetch";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CourseCard from "components/CourseCard/CourseCard";
import "./Courses.scss";
import Searchbar from "components/Searchbar/Searchbar";
import CategorieLearningPath from "pages/public/LearningPaths/CategoryLearningPath/CategoryLearningPath";
import { useTranslation } from "react-i18next";
import Loading from "components/Loading";
import { IoMdSchool } from "react-icons/io";
import { Row } from "react-bootstrap";
import ButtonSecondary from "components/ButtonSecondary/ButtonSecondary";

const Courses = () => {
  const { data, error, get, isLoading } = useFetch();
  const [input, setInput] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const { t } = useTranslation();
  const history = useHistory();

  const handleClick = () => {
    history.push("/learning_paths");
  };

  const handleCategoryFilter = (list) => {
    setCategoryList(list);
  };

  useEffect(() => {
    get(`/learning_paths?single=true&categories=${categoryList.join(", ")}`);
  }, [categoryList]);

  return (
    <div className="Courses">
      <div className="Courses__header">
        <h2>{t("course_introduction")}</h2>
        <p>{t("course_description_first")}</p>
        <ButtonSecondary
          label={t("see_learning_path")}
          handleClick={handleClick}
          sizeClass="medium"
          className="ButtonSecondary mb-5"
        />
        <p>{t("path_description_second")}</p>
        <p>{t("path_description_third")}</p>
        <p>{t("path_description_fourth")}</p>
        <p>
          <IoMdSchool size={80} />
        </p>
      </div>

      <Searchbar getInput={setInput} />
      <CategorieLearningPath handleCategoryFilter={handleCategoryFilter} />

      <Row className="d-flex justify-content-center">
        {isLoading && <Loading />}
        {(data &&
          data.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))) ||
          (!isLoading && <h3>{t("common:noResult")})</h3>)}
      </Row>
    </div>
  );
};

export default Courses;
