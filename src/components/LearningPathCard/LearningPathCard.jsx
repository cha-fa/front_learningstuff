import { Link } from "react-router-dom";
import "./LearningPathCard.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";

const LearningPathCard = ( { learningPath } ) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const {title, price_in_cents, id } = learningPath;
  const [displayCourses, setDisplayCourses] = useState(false);
  const toggleDisplay = () => (displayCourses ? setDisplayCourses(false) : setDisplayCourses(true));

  const dataSubscription = {
    learning_path_id: id,
  };

  const handleSubscription = (e) => {
    e.preventDefault();
  };

  return (
  <div>
      <div onClick={toggleDisplay} className='LearningPathsCard' style={{ backgroundImage: "url(\"https://source.unsplash.com/random"}}>
        <div className="header" >
        <Button
            onClick={handleSubscription}
            className="ButtonPrimary"
            size="sm"
          >
            {price_in_cents && price_in_cents / 100} € Subscribe Now!
          </Button>
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