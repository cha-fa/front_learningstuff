import { useSelector } from "react-redux";
import { FaLinkedin } from "react-icons/fa";

const ProfileDisplay = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <div className="ProfileDisplay">
      {currentUser && (
        <>
          <p className="lead mt-2 mb-2">
            {currentUser.first_name} {currentUser.last_name}
          </p>

          {currentUser.linkedin_address && (
            <a href={currentUser.linkedin_address}>
              <FaLinkedin />
            </a>
          )}

          {currentUser.description && (
            <p className="text-muted font-italic">{currentUser.description}</p>
          )}

          {currentUser.job && <p>{currentUser.job}</p>}
        </>
      )}
    </div>
  );
};

export default ProfileDisplay;
