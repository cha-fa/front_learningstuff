import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";
import LearningPathCard from "components/LearningPathCard/LearningPathCard";
import LearningPathList from "pages/public/LearningPaths/ShowLearningPath/LearningPathList";
import "./LearningPaths.scss";
import CategorieLearningPath from "./CatogorieLearningPath/CategorieLearningPath";
  
const LearningPaths = () => {

  const { data, error, get } = useFetch();
  const learningPath = (data ? data.filter(course => !course.is_single_course) : null);
  const [input, setInput]= useState("");
  const [learningPathCategoryIds, setLearningPathCategoryIds]= useState([]);
  const [categoryList, setCategoryList]= useState([]);


  console.log(learningPath);

  const handleCategoryFilter = (list) => {
    setCategoryList(list);
  };

  useEffect(() => {
    get("/learning_paths");
  }, []);

  // useEffect(()=>{
  // setLearningPathToShow(learningPath.filter((course)=>{
  //     if(course.includes())
  // }));
  // },[categoryList]);

return (
  <div className='LearningPaths'>
    <h2>LearningPaths</h2>
    <CategorieLearningPath handleCategoryFilter={handleCategoryFilter} />
    {learningPath && <LearningPathList learningPaths={learningPath} categoryList={categoryList}/>}
  </div>
);
};
  
export default LearningPaths;