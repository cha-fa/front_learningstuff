import { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap";

const EditProfile = ({ onSubmit }) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [firstName, setFirstName] = useState(currentUser?.first_name);
  const [lastName, setLastName] = useState(currentUser?.last_name);
  const [description, setDescription] = useState(currentUser?.description);
  const [linkedIn, setLinkedIn] = useState(currentUser?.linkedin_address);
  const [job, setJob] = useState(currentUser?.job);

  const { t } = useTranslation();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      first_name: firstName,
      last_name: lastName,
      description: description,
      linkedin_address: linkedIn,
      job: job,
    });
  };

  return (
    <div className="EditProfile">
      <h4>{t("profile:editheader")}</h4>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>{t("profile:firstname")}</FormLabel>
          <FormControl
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>{t("profile:lastname")}</FormLabel>
          <FormControl
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>{t("profile:description")}</FormLabel>
          <FormControl
            as="textarea"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>{t("profile:linkedin")}</FormLabel>
          <FormControl
            value={linkedIn}
            onChange={(e) => setLinkedIn(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>{t("profile:job")}</FormLabel>
          <FormControl value={job} onChange={(e) => setJob(e.target.value)} />
        </FormGroup>
        <Button type="submit" className="ButtonPrimary float-right my-3">
          {t("profile:cta")}
        </Button>
      </Form>
    </div>
  );
};

export default EditProfile;
