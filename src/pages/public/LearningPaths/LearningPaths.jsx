import { useEffect } from "react";
import useFetch from "hooks/useFetch";
import LearningPathCard from "components/LearningPathCard/LearningPathCard";
import "./LearningPaths.scss";
  
const LearningPaths = () => {

  const { data, error, get } = useFetch();

  useEffect(() => {
    get("/learning_paths");
  }, []);

  console.log("LearningPaths", data);
  console.log("Error", error);
  
return (
  <div className='LearningPaths'>
    <h2>LearningPaths</h2>
    <div className='learningPaths'> 
      {!error && data && data.length > 0 &&
        data.map(learningPath => <LearningPathCard key={learningPath.id} learningPath={learningPath} /> )
      }
    </div>
  </div>
);
};
  
export default LearningPaths;