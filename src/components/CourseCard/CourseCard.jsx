import { Link } from "react-router-dom";
import "./CourseCard.scss";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import useFetch from "hooks/useFetch";

const CourseCard = ( { course } ) => {

  const currentUser = useSelector((state) => state.auth.currentUser);
  const {title, price_in_cents, id } = course;
  const { post } = useFetch();

  const dataSubscription = {
    "learning_path_id": id,
  };
  
  const handleSubscription = (e) => {
      e.preventDefault();
      post(`/users/${currentUser.id}/subscriptions`, dataSubscription);
      alert(`${currentUser.first_name} you suscribe to ${course.title}`);
  };

  return (
    <Link to={`/courses/${id}`} >
      <div className='CourseCard' style={{ backgroundImage: "url(\"https://source.unsplash.com/random"}}>
        <div className="header" >
          <Button onClick={handleSubscription} className="ButtonPrimary" size="sm">
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