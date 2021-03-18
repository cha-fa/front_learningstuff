import { Link } from "react-router-dom";
import "./LearningPathCard.scss";
import { useState } from "react";

const LearningPathCard = ( { learningPath } ) => {
  
  const {title, price_in_cents, id } = learningPath;
  const [displayCourses, setDisplayCourses] = useState(false);
  const toggleDisplay = () => (displayCourses ? setDisplayCourses(false) : setDisplayCourses(true));

  return (
  <div>

      <div onClick={toggleDisplay} className='LearningPathsCard' style={{ backgroundImage: "url(\"https://source.unsplash.com/random"}}>
        <div className="header" >
          <p>{`${price_in_cents && price_in_cents/100}`} €</p>
        </div>
        <div className='bottomCard' >
            <p>{title}</p>
        </div>
      </div>
        
      {displayCourses &&
          <ul className="courses">
            {learningPath.courses.map(course => 
              <Link key={course.id} to={`/courses/${course.id}`}>
                <li className="courseLine">{course.title}</li>
              </Link>)
            }
          </ul>
      }

  </div>
  );
};
  
export default LearningPathCard;