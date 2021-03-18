import { Link } from "react-router-dom";
import "./LearningPathCard.scss";

const LearningPathCard = ( { learningPath } ) => {
  
  const {title, price_in_cents, id } = learningPath;


  console.log("LearningPathCard", learningPath);

  return (
    <Link to={`/learning_paths/${id}`} >
      <div className='LearningPathsCard' style={{ backgroundImage: "url(\"https://source.unsplash.com/random"}}>
        <div className="header" >
          {price_in_cents}
        </div>
        <div className='bottomCard' >
            <p>{title}</p>
        </div>
      </div>
    </Link>
  );
};
  
export default LearningPathCard;