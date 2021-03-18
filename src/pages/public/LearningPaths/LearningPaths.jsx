import { useEffect } from "react";
import useFetch from "hooks/useFetch";
import LearningPathCard from "components/LearningPathCard/LearningPathCard";
import "./LearningPaths.scss";
  
const LearningPaths = () => {

  const { data, error, get } = useFetch();
  const learningPath = (data ? data.filter(course => !course.is_single_course) : "");

  useEffect(() => {
    get("/learning_paths");
  }, []);

return (
  <div className='LearningPaths'>
    <h2>LearningPaths</h2>
    <div className='learningPaths'> 
      {!error && learningPath && learningPath.length > 0 &&
        data.map(path => <LearningPathCard key={path.id} learningPath={path} /> )
      }
    </div>
  </div>
);
};
  
export default LearningPaths;