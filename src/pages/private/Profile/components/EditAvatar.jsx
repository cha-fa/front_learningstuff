import { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const EditAvatar = ( { onSubmit } ) => {

  const currentUser = useSelector((state) => state.auth.currentUser);
  const [avatar, setAvatar] = useState(currentUser.avatar);
  const { t } = useTranslation();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      avatar: avatar,
    });
  };

  const onFileChange = (event) => { 
    setAvatar({ avatar: event.target.files[0] }); 
  };

  return (
    <div className="EditAvatar">
      <form> 
        <input type="file" onChange={onFileChange} /> 
        <button 
          className="btn btn-sm btn-success"
          onClick={handleSubmit}> 
          {t("editprofile:avatarheader")} 
        </button> 
      </form>
    </div>
  );
};

export default EditAvatar;