import "./CourseCard.scss";

const CourseCard = ( { course } ) => {
  
  const title = course.attributes.title;
  // const id = course.id;

  return (
  <div className='CourseCard' style={{ backgroundImage: "url(\"https://source.unsplash.com/random"}}>
    <div className="header" >
      Free
    </div>
    <div className='bottomCard' >
        <p>{title}</p>
    </div>
  </div>
  );
};
  
export default CourseCard;