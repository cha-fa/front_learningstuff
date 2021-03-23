import {useState, useEffect} from "react";
import LearningPathCard from "components/LearningPathCard/LearningPathCard";
import useFetch from "hooks/useFetch";
const LearningPathList = ({learningPaths, categoryList}) => {
  const {data, error} = useFetch();

  const [learningPathCategoryIds, setLearningPathCategoryIds]= useState([]);

  useEffect(() => {
    setLearningPathCategoryIds(
      learningPaths.map(course => course.categories.map(cat => cat.id))
     );
  }, []);
  console.log(learningPathCategoryIds);

  return (
  <div className='LearningPathList'>
    
    <div className='learningPaths'> 
        {!error && learningPaths && learningPaths.length > 0 &&
          learningPaths.filter((value) => {
            if(categoryList.length < 1)
              {return value;
            }else if (categoryList.map((cat)=> cat.id))
              {return value;
              }
          }).map(path => <LearningPathCard key={path.id} learningPath={path} /> )
        }
      </div>
  </div>
  );
};
  
export default LearningPathList;