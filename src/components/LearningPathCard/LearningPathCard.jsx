import { Link } from "react-router-dom";
import "./LearningPathCard.scss";

const LearningPathCard = ( { learningPath } ) => {
  
  const {title, price_in_cents, id } = learningPath;

  return (
    <Link to={`/learning_paths/${id}`} >
      <div className='LearningPathsCard' style={{ backgroundImage: "url(\"https://source.unsplash.com/random"}}>
        <div className="header" >
          <p>{`${price_in_cents && price_in_cents/100}`} €</p>
        </div>
        <div className='bottomCard' >
            <p>{title}</p>
        </div>
      </div>
    </Link>
  );
};
  
export default LearningPathCard;