import "./ShowCourse.scss";
import { useEffect } from "react";
import useFetch from "hooks/useFetch";
  
const ShowCourse = ( { match } ) => {
  const { data, get } = useFetch();

  useEffect(() => {
    get(`/courses/${parseInt(match.params.id)}`);
  }, []);

  // console.log("Show Course", data);
  
return ( data &&
  <div className='ShowCourse'>
     <h1>{data.title}</h1>
  </div>
);
};
  
export default ShowCourse;