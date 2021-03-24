import { Link, useHistory } from "react-router-dom";
import "./CourseCard.scss";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import useFetch from "hooks/useFetch";
import paymentFetch from "hooks/paymentFetch";

const CourseCard = ({ course, subscribed }) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { title, price_in_cents, id } = course;
  const { post, error } = useFetch();
  const { newPayment } = paymentFetch();
  const history = useHistory();

  const handleSubscription = (e) => {
    e.preventDefault();
    if (currentUser){
      newPayment(price_in_cents, id);
    } else {
      history.push("/login");
    }
  };

  return (
    <Link to={`/courses/${course.courses[0].id}`}>
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
          {error && <h2 style={{ color: "black" }}>{error}</h2>}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
