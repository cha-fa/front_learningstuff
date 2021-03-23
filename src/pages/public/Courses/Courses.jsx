import useFetch from "hooks/useFetch";
import { useEffect, useState } from "react";
import CourseCard from "components/CourseCard/CourseCard";
import "./Courses.scss";
import Searchbar from "components/Searchbar/Searchbar";
  
const Courses = () => {

  const { data, error, get } = useFetch();
  const [input, setInput]= useState("");
  const singleCourse = (data ? data.filter(course => course.is_single_course) : "");

  useEffect(() => {
    get("/learning_paths");
  }, []);

return (
<div className='Courses'>
<h2>Courses</h2>
<Searchbar getInput={setInput}/>
  <div className='coursesList'>
  {!error && singleCourse && singleCourse.length > 0 &&
        singleCourse.filter((value) => {
          if(input === "")
            {return value;
            }else if (value.title.toLowerCase().includes(input.toLowerCase()))
            {return value;
            }
        }).map(course => <CourseCard key={course.id} course={course} /> )
    }
  </div>
</div>
);
};
  
export default Courses;