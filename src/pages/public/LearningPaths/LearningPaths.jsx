import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";
import LearningPathCard from "components/LearningPathCard/LearningPathCard";
import "./LearningPaths.scss";
import SearchbarLearningPath from "./SearchbarLearningPath/SearchbarLearningPath";
  
const LearningPaths = () => {

  const { data, error, get } = useFetch();
  const learningPath = (data ? data.filter(course => !course.is_single_course) : "");
  const [input, setInput]= useState("");

  useEffect(() => {
    get("/learning_paths");
  }, []);
return (
  <div className='LearningPaths'>
    <h2>LearningPaths</h2>
    <SearchbarLearningPath getInput={setInput}/>
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
    </div>
  </div>
);
};
  
export default LearningPaths;