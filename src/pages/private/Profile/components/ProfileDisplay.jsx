import capitalize from "capitalize";

const ProfileDisplay = ( {data} ) => {
  return (
    <div className="ProfileDisplay">
      <h5>{data.first_name} {data.last_name}</h5>
      <p>{capitalize(data.role)}</p>

      {data.description && (
        <p>{data.description}</p>
      )}

      {data.linkedin_address && (
        <a href={data.linkedin_address}>LinkedIn</a>
      )}

      {data.job && (
        <p>{data.job}</p>
      )}
    </div>
  );
};

export default ProfileDisplay;