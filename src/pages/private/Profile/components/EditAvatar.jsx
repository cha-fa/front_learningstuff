import { useState } from "react";
import { useTranslation } from "react-i18next";

const EditAvatar = ( { onSubmit } ) => {
  const { t } = useTranslation();
  const [avatar, setAvatar] = useState(null);

  const onAvatarChange = (event) => { 
    setAvatar(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();  
    formData.append( 
      "avatar", 
      avatar,
    );
    onSubmit(formData);
  };

  return (
    <div className="EditAvatar">
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={onAvatarChange}
          accept="image/*"
        />
        <button
          type="submit" 
          className="btn btn-sm btn-success">
          {t("editprofile:avatarheader")} 
        </button> 
      </form>
    </div>
  );
};

export default EditAvatar;