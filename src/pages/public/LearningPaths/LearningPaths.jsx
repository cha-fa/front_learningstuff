import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";
import LearningPathCard from "components/LearningPathCard/LearningPathCard";
import "./LearningPaths.scss";
import CategorieLearningPath from "./CategoryLearningPath/CategoryLearningPath";
import Searchbar from "../../../components/Searchbar/Searchbar";
import { useTranslation } from "react-i18next";
  
const LearningPaths = () => {

  const { data, error, get } = useFetch();
  const learningPath = (data ? data.filter(course => !course.is_single_course) : null);
  const [input, setInput]= useState("");
  const [categoryList, setCategoryList]= useState([]);
  const { t } = useTranslation();

  const learningPathFiltered = !error && learningPath && learningPath.length > 0 &&
    learningPath.filter((value) => {
      if(input === "")
        {return value;
      }else if (value.title.toLowerCase().includes(input.toLowerCase()))
        {return value; 
      }
    });

  const handleCategoryFilter = (list) => {
    setCategoryList(list);
  };

  useEffect(() => {
    get("/learning_paths");
  }, []);

  useEffect(()=> {
    get(`/learning_paths?categories=${categoryList.join(",")}`);
  }, [categoryList]);


return (
  <div className='LearningPaths'>
    <h2>LearningPaths</h2>
    <Searchbar getInput={setInput}/>
    <CategorieLearningPath handleCategoryFilter={handleCategoryFilter} />

    {learningPath && 
     <div className='learningPaths'> 
      {learningPathFiltered.length > 0 ? 
      learningPathFiltered.map(path =><LearningPathCard key={path.id} learningPath={path} /> )
      : 
      <h1>{t("common:noResult")}</h1>
      }
    </div> }
  </div>
);
};
  
export default LearningPaths;