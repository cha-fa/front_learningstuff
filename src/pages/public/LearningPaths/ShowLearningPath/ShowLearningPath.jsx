import "./ShowLearningPath.scss";
import useFetch from "hooks/useFetch";
import { useEffect } from "react";
  
const ShowLearningPath = ( { match } ) => {
  const { data, get } = useFetch();

  useEffect(() => {
    get(`/learning_paths/${parseInt(match.params.id)}`);
  }, []);

return ( data &&
  <div className='ShowLearningPath'>
    <h1>{data.title}</h1>
  </div>
);
};
  
export default ShowLearningPath;