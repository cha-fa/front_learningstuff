import capitalize from "capitalize";

const ProfileDisplay = ( {profile} ) => {
  return (
    <div className="ProfileDisplay">
      <h5>{profile.first_name} {profile.last_name}</h5>
      <p>{capitalize(profile.role)}</p>

      {profile.description && (
        <p>{profile.description}</p>
      )}

      {profile.linkedin_address && (
        <a href={profile.linkedin_address}>LinkedIn</a>
      )}

      {profile.job && (
        <p>{profile.job}</p>
      )}
    </div>
  );
};

export default ProfileDisplay;