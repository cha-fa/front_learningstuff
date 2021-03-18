import "./ShowLearningPath.scss";
import useFetch from "hooks/useFetch";
import { useEffect } from "react";
  
const ShowLearningPath = ( { match } ) => {
  const { data, error, get } = useFetch();

  console.log("ShowCourse Match", match.params);

  useEffect(() => {
    get(`/learning_paths/${parseInt(match.params.id)}`);
  }, []);

  console.log("Show Learning Path", data);
  
return ( data &&
  <div className='ShowLearningPath'>
    <h1>{data.title}</h1>
  </div>
);
};
  
export default ShowLearningPath;