import "./ShowCourse.scss";
import { useEffect } from "react";
import useFetch from "hooks/useFetch";
  
const ShowCourse = ( { match } ) => {
  const { data, get } = useFetch();

  useEffect(() => {
    get(`/learning_paths/${parseInt(match.params.id)}`);
  }, []);

return ( data &&
  <div className='ShowCourse'>
     <h1>{data.title}</h1>
  </div>
);
};
  
export default ShowCourse;