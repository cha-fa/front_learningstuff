import { Link } from "react-router-dom";
import "./CourseCard.scss";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import useFetch from "hooks/useFetch";
import paymentFetch from "hooks/paymentFetch";
import { useDispatch } from "react-redux";


const CourseCard = ({ course }) => {

  const { title, price_in_cents, id } = course;
  const { post, error } = useFetch();
  const { newPayment } = paymentFetch();

  const handleSubscription = (e) => {
    e.preventDefault();
    newPayment(price_in_cents, id);
  };

  return (
    <>
      <Link to={`/courses/${id}`}>
        <div className="CourseCard">
          <div className="header">
            <Button
              onClick={handleSubscription}
              className="ButtonPrimary"
              size="sm"
            >
              {price_in_cents && price_in_cents / 100} € Subscribe Now!
            </Button>
          </div>
          <div className="bottomCard">
            <p>{title}</p>
          </div>
          <h1 style={{ color: "black" }}>{error && error}</h1>
        </div>
      </Link>
    </>
  );
};

export default CourseCard;
