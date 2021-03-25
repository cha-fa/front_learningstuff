import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { displayError } from "stores/flashmessages/flashMiddleware";
import { useTranslation } from "react-i18next";
import useFetch from "hooks/useFetch";
import CourseCard from "components/CourseCard/CourseCard";
import "./Courses.scss";
import Searchbar from "components/Searchbar/Searchbar";
import CategorieLearningPath from "pages/public/LearningPaths/CategoryLearningPath/CategoryLearningPath";

const Courses = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    if (search === "?payment_canceled") {
      dispatch(displayError(t("payment:cancel")));
    }
  }, [search]);

  const { data, error, get } = useFetch();
  const [input, setInput] = useState("");
  const singleCourse = data
    ? data.filter((course) => course.is_single_course)
    : "";
  const [categoryList, setCategoryList] = useState([]);

  const singleCourseFiltered =
    !error &&
    singleCourse &&
    singleCourse.length > 0 &&
    singleCourse.filter((value) => {
      if (input === "") {
        return value;
      } else if (value.title.toLowerCase().includes(input.toLowerCase())) {
        return value;
      }
    });

  useEffect(() => {
    get("/learning_paths");
  }, []);

  const handleCategoryFilter = (list) => {
    setCategoryList(list);
  };

  useEffect(() => {
    get(`/learning_paths?categories=${categoryList.join(",")}`);
  }, [categoryList]);

  return (
    <div className="Courses">
      <h2>Courses</h2>
      <Searchbar getInput={setInput} />
      <CategorieLearningPath handleCategoryFilter={handleCategoryFilter} />
      {singleCourse && (
        <div className="coursesList">
          {singleCourseFiltered.length > 0 ? (
            singleCourseFiltered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <h3>{t("common:noResult")}</h3>
          )}
        </div>
      )}
    </div>
  );
};

export default Courses;
