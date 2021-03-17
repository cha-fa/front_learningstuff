import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useFetch from "hooks/useFetch";
import EditProfile from "pages/Profile/components/EditProfile";
import ProfileDisplay from "pages/Profile/components/ProfileDisplay";
import Avatar from "pages/Profile/components/Avatar";
import EditAvatar from "pages/Profile/components/EditAvatar";

const Profile = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [profile, setProfile] = useState(currentUser);
  const [editing, setEditing] = useState(false);

  const { get, put, data: updatedInfo } = useFetch();

  const updateProfile = (newDetails) => {
    put("/profile", newDetails);
    setEditing(editing);
    get("/profile");
  };

  useEffect(() => {
    if (updatedInfo) {
      setProfile(updatedInfo);
    }
  }, [updatedInfo]);

  return (
    <div className="Profile container my-5">
      <div className="text-center">
        <Avatar />
        <EditAvatar />
        <ProfileDisplay data={profile} />
        <EditProfile onSubmit={updateProfile} />
      </div>
    </div>
  );
};

export default Profile;
