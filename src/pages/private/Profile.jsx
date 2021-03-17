import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { email, first_name, last_name } = currentUser;
  return (
    <div className="Profile">
      <p>{email}</p>
      <p>{first_name}</p>
      <p>{last_name}</p>
    </div>
  );
};

export default Profile;
