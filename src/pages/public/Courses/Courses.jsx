import useFetch from "hooks/useFetch";
import { useEffect } from "react";
import CourseCard from "components/CourseCard/CourseCard";
import "./Courses.scss";
  
const Courses = () => {

  const { data, error, get } = useFetch();

  const singleCourse = (data ? data.filter(course => course.is_single_course) : "");

  useEffect(() => {
    get("/learning_paths");
  }, []);

return (
<div className='Courses'>
<h2>Courses</h2>
  <div className='coursesList'>
    {!error && singleCourse && singleCourse.length > 0 &&
      singleCourse.map(course => <CourseCard key={course.id} course={course} /> )
    }
  </div>
</div>
);
};
  
export default Courses;