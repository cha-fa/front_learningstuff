import useFetch from "hooks/useFetch";
import { useEffect, useState } from "react";
import CourseCard from "components/CourseCard/CourseCard";
import "./Courses.scss";
import Searchbar from "components/Searchbar/Searchbar";
import CategorieLearningPath from "pages/public/LearningPaths/CategoryLearningPath/CategoryLearningPath";
import { useTranslation } from "react-i18next";
const Courses = () => {

  const { data, error, get } = useFetch();
  const [input, setInput]= useState("");
  const singleCourse = (data ? data.filter(course => course.is_single_course) : "");
  const [categoryList, setCategoryList]= useState([]);
  const { t } = useTranslation();

  const singleCourseFiltered = !error && singleCourse && singleCourse.length > 0 &&
    singleCourse.filter((value) => {
      if(input === "")
        {return value;
        }else if (value.title.toLowerCase().includes(input.toLowerCase()))
        {return value;
        }
    });

  useEffect(() => {
    get("/learning_paths");
  }, []);

  const handleCategoryFilter = (list) => {
    setCategoryList(list);
  };

  useEffect(()=> {
    get(`/learning_paths?categories=${categoryList.join(",")}`);
  }, [categoryList]);

  return (
  <div className='Courses'>
  <h2>Courses</h2>
  <Searchbar getInput={setInput}/>
  <CategorieLearningPath handleCategoryFilter={handleCategoryFilter} />
  {singleCourse &&
    <div className='coursesList'>
    {singleCourseFiltered.length > 0 ?
      singleCourseFiltered.map(course => <CourseCard key={course.id} course={course} /> )
      :
      <h1>{t("common:noResult")}</h1>
      }
    </div> }
  </div>
  );
  };
  
export default Courses;