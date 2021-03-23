import { Link } from "react-router-dom";
import "./CourseCard.scss";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import useFetch from "hooks/useFetch";
import { useDispatch } from "react-redux";
import {
  displaySuccess,
  displayError,
} from "stores/flashmessages/flashMiddleware";

const CourseCard = ({ course, subscribed }) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { title, price_in_cents, id } = course;
  const { post, error } = useFetch();
  const dispatch = useDispatch();

  const dataSubscription = {
    learning_path_id: id,
  };

  const handleAlert = () => {
    if (error) {
      dispatch(displayError(error));
    } else {
      dispatch(displaySuccess("Enregistré !"));
    }
  };

  const handleSubscription = (e) => {
    e.preventDefault();
    alert(`${currentUser.first_name} you suscribe to ${course.title}`);
    post(`/users/${currentUser.id}/subscriptions`, dataSubscription);
    handleAlert();
  };

  console.log(course);

  return (
    <Link to={`/courses/${id}`}>
      <div className="CourseCard">
        <div className="header">
          {!subscribed && (
            <Button
              onClick={handleSubscription}
              className="ButtonPrimary"
              size="sm"
            >
              {price_in_cents && price_in_cents / 100} € Subscribe Now!
            </Button>
          )}
        </div>
        <div className="bottomCard">
          <p>{title}</p>
        </div>
        <h1 style={{ color: "black" }}>{error && error}</h1>
      </div>
    </Link>
  );
};

export default CourseCard;
