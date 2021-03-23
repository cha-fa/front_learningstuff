import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";
import LearningPathCard from "components/LearningPathCard/LearningPathCard";
import "./LearningPaths.scss";
import CategorieLearningPath from "./CategoryLearningPath/CategoryLearningPath";
import Searchbar from "../../../components/Searchbar/Searchbar";

  
const LearningPaths = () => {

  const { data, error, get } = useFetch();
  const learningPath = (data ? data.filter(course => !course.is_single_course) : null);
  const [input, setInput]= useState("");
  const [learningPathCategoryIds, setLearningPathCategoryIds]= useState([]);
  const [categoryList, setCategoryList]= useState([]);


  const handleCategoryFilter = (list) => {
    setCategoryList(list);
  };

  useEffect(() => {
    get("/learning_paths");
  }, []);

  useEffect(()=> {
    get(`/learning_paths?categories=${categoryList.join(",")}`);
  }, [categoryList]);

  // useEffect(()=>{
  // setLearningPathToShow(learningPath.filter((course)=>{
  //     if(course.includes())
  // }));
  // },[categoryList]);

return (
  <div className='LearningPaths'>
    <h2>LearningPaths</h2>
    <Searchbar getInput={setInput}/>
    <CategorieLearningPath handleCategoryFilter={handleCategoryFilter} />
    {learningPath && 
     <div className='learningPaths'> 
      {!error && learningPath && learningPath.length > 0 &&
        learningPath.filter((value) => {
          if(input === "")
            {return value;
            }else if (value.title.toLowerCase().includes(input.toLowerCase()))
            {return value;
            }
        }).map(path => <LearningPathCard key={path.id} learningPath={path} /> )
      }
    </div> }
  </div>
);
};
  
export default LearningPaths;