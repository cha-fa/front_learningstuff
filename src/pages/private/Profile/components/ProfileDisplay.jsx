import { FaLinkedin } from "react-icons/fa";

const ProfileDisplay = ( {profile} ) => {
  return (
    <div className="ProfileDisplay">
      <p className="lead mt-2 mb-2">{profile.first_name} {profile.last_name}</p>

      {profile.linkedin_address && (
        <a href={profile.linkedin_address}><FaLinkedin /></a>
      )}

      {profile.description && (
        <p className="text-muted font-italic">{profile.description}</p>
      )}

      {profile.job && (
        <p>{profile.job}</p>
      )}
    </div>
  );
};

export default ProfileDisplay;