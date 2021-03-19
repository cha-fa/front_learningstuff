import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useFetch from "hooks/useFetch";
import EditProfile from "pages/private/Profile/components/EditProfile";
import ProfileDisplay from "pages/private/Profile/components/ProfileDisplay";
import Avatar from "pages/private/Profile/components/Avatar";
import EditAvatar from "pages/private/Profile/components/EditAvatar";

const Profile = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [profile, setProfile] = useState(currentUser.profile);
  const [avatar, setAvatar] = useState(currentUser.avatar);
  const [editing, setEditing] = useState(false);

  const { get, put, postAvatar, data: updatedInfo } = useFetch();

  const updateProfile = (newDetails) => {
    put("/profile", newDetails);
    setEditing(editing);
    get("/profile");
  };

  const updateAvatar = (newAvatar) => {
    postAvatar(`/users/${currentUser.profile.id}/avatars`, newAvatar);
    get("/profile");
  };

  useEffect(() => {
    if (updatedInfo) {
      setProfile(updatedInfo.profile);
      setAvatar(currentUser.avatar);
    }
  }, [updatedInfo]);

  return (
    <div className="Profile container my-3">
      <div className="text-center">
        <div className="my-4">
          <Avatar data={avatar} />
          <EditAvatar onSubmit={updateAvatar} />
        </div>
        <div className="my-4">
          <ProfileDisplay data={profile} />
          <EditProfile onSubmit={updateProfile} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
