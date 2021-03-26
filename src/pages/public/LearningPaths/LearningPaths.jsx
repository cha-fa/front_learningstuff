import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";
import LearningPathCard from "components/LearningPathCard/LearningPathCard";
import "./LearningPaths.scss";
import CategoryLearningPath from "./CategoryLearningPath/CategoryLearningPath";
import Searchbar from "../../../components/Searchbar/Searchbar";
import { useTranslation } from "react-i18next";
import { HiBriefcase } from "react-icons/hi";
import { Row } from "react-bootstrap";
import Loading from "components/Loading";

const LearningPaths = () => {
  const { data, error, get, isLoading } = useFetch();
  const [input, setInput] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const { t } = useTranslation();

  const handleCategoryFilter = (list) => {
    setCategoryList(list);
  };

  useEffect(() => {
    get(`/learning_paths?single=false&categories=${categoryList.join(", ")}`);
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

      <Row className="d-flex justify-content-center">
        {isLoading && <Loading />}
        {(data &&
          data.filter((value) => {
            if(input === ""){
              return value;
            } else if (value.title.toLowerCase().includes(input.toLowerCase())){
              return value;
            }
          }).map((path) => (
            <LearningPathCard
              key={path.id}
              learningPath={path}
              width="40%"
              imgHeight="300px"
            />
          ))) ||
          (!isLoading && <h3>{t("common:noResult")}</h3>)}
      </Row>
    </div>
  );
};

export default LearningPaths;
