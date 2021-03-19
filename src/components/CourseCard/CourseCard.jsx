import { Link } from "react-router-dom";
import "./CourseCard.scss";
import Button from "react-bootstrap/Button";

const CourseCard = ( { course } ) => {
  
  const {title, price_in_cents, id } = course;

  return (
    <Link to={`/courses/${id}`} >
      <div className='CourseCard' style={{ backgroundImage: "url(\"https://source.unsplash.com/random"}}>
        <div className="header" >
          <Button href="/" className="ButtonPrimary" size="sm">
            {price_in_cents && price_in_cents/100} € Subscribe Now!
          </Button>
        </div>
        <div className='bottomCard' >
            <p>{title}</p>
        </div>
      </div>
    </Link>
  );
};
  
export default CourseCard;