import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";
import LearningPathCard from "components/LearningPathCard/LearningPathCard";
import "./LearningPaths.scss";
import CategoryLearningPath from "./CategoryLearningPath/CategoryLearningPath";
import Searchbar from "../../../components/Searchbar/Searchbar";
import { useTranslation } from "react-i18next";
import { HiBriefcase } from "react-icons/hi";
import { Row } from "react-bootstrap";

const LearningPaths = () => {
  const { data, error, get } = useFetch();
  const learningPath = data
    ? data.filter((course) => !course.is_single_course)
    : null;
  const [input, setInput] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const { t } = useTranslation();

  const learningPathFiltered =
    !error &&
    learningPath &&
    learningPath.length > 0 &&
    learningPath.filter((value) => {
      if (input === "") {
        return value;
      } else if (value.title.toLowerCase().includes(input.toLowerCase())) {
        return value;
      }
    });

  const handleCategoryFilter = (list) => {
    setCategoryList(list);
  };

  useEffect(() => {
    get("/learning_paths");
    return;
  }, []);

  useEffect(() => {
    get(`/learning_paths?categories=${categoryList.join(",")}`);
    return;
  }, [categoryList]);

  return (
    <div className="LearningPaths">
      <div className="LearningPaths__header">
        <h2>{t("path_introduction")}</h2>
        <p>{t("path_description_first")}</p>
        <p>{t("path_description_second")}</p>
        <p>{t("path_description_third")}</p>
        <p>{t("path_description_fourth")}</p>
        <p>
          <HiBriefcase size={80} />
        </p>
      </div>
      <Searchbar getInput={setInput} />

      <CategoryLearningPath handleCategoryFilter={handleCategoryFilter} />

      {learningPath && (
        <Row className="d-flex justify-content-center">
          {learningPathFiltered.length > 0 ? (
            learningPathFiltered.map((path) => (
              <LearningPathCard key={path.id} learningPath={path} />
            ))
          ) : (
            <h3>{t("common:noResult")}</h3>
          )}
        </Row>
      )}
    </div>
  );
};

export default LearningPaths;
