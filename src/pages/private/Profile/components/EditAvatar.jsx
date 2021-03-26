import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Form, Button } from "react-bootstrap";

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
      <h4>{t("profile:avatarheader")}</h4>
      <Form onSubmit={handleSubmit}>
        <input
          type="file"
          className="ButtonPrimary btn-sm"
          onChange={onAvatarChange}
          accept="image/*"
        />
        <Button
          type="submit" 
          className="ButtonPrimary btn-sm">
          {t("profile:cta")} 
        </Button>
      </Form>
    </div>
  );
};

export default EditAvatar;