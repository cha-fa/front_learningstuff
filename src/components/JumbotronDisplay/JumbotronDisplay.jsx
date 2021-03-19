import ButtonSecondary from "components/ButtonSecondary/ButtonSecondary";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import "./JumbotronDisplay.scss";

const JumbotronDisplay = () => {
  return (
    <>
      <Jumbotron className="image-jumbotron">
        <div className="text-center">
          <h2 className="display-4">Learning a lot of stuffs</h2>
          <h3>you are in charge of your future</h3>
          <p className="lead">
            <Link to="/login">
              <ButtonSecondary sizeClass="medium" label="Get Started" />
            </Link>
          </p>
        </div>
      </Jumbotron>
    </>
  );
};

export default JumbotronDisplay;
