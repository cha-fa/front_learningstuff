import noavatar from "assets/noavatar.jpg";

const Avatar = ( {data: avatar} ) => {

  return (
    <div className="Avatar">
      {avatar && (
        <img 
        src={`http://localhost:8080/${avatar}`}
        alt="Real avatar."
        className="img-thumbnail profile_pic rounded-circle m-3"
        style={{height: "150px", width:"150px"}}
        />
      ) || (
        <img 
          src={noavatar}
          alt="Unknown avatar in case the user hasn't upload his/her."
          className="img-thumbnail profile_pic rounded-circle m-3"
          style={{height: "150px", width:"150px"}}
        />
      )}
    </div>
  );
};

export default Avatar;