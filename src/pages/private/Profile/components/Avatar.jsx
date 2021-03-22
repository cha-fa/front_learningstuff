import { useSelector } from "react-redux";
import noavatar from "assets/noavatar.jpg";

const Avatar = () => {

  const currentUser = useSelector((state) => state.auth.currentUser);
  const ACTIVE_STORAGE_URL = process.env.REACT_APP_ACTIVE_STORAGE_URL;

  return (
    <div className="Avatar">
      {currentUser.avatar && (
        <img 
        src={`${ACTIVE_STORAGE_URL}${currentUser.avatar}`}
        alt="Real avatar."
        className="img-thumbnail profile_pic rounded-circle"
        style={{height: "150px", width:"150px"}}
        />
      ) || (
        <img 
          src={noavatar}
          alt="Unknown avatar in case the user hasn't upload his/her."
          className="img-thumbnail profile_pic rounded-circle"
          style={{height: "150px", width:"150px"}}
        />
      )}
    </div>
  );
};

export default Avatar;