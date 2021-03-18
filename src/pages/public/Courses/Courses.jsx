import useFetch from "hooks/useFetch";
import { useEffect } from "react";
import CourseCard from "components/CourseCard/CourseCard";
import "./Courses.scss";
  
const Courses = () => {

  const { data, error, get } = useFetch();

  useEffect(() => {
    get("/courses");
  }, []);

  console.log("Courses", data);
  console.log("Error", error);
  
return (
<div className='Courses'>
<h2>Courses</h2>
  <div className='coursesList'>
    {!error && data && data.length > 0 &&
      data.map(course => <CourseCard key={course.id} course={course} /> )
    }
  </div>
</div>
);
};
  
export default Courses;