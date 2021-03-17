import { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "react-bootstrap";

const EditProfile = ( { onSubmit } ) => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [firstName, setFirstName] = useState(currentUser.first_name);
  const [lastName, setLastName] = useState(currentUser.last_name);
  const [description, setDescription] = useState(currentUser.description);
  const [linkedIn, setLinkedIn] = useState(currentUser.linkedin_address);
  const [job, setJob] = useState(currentUser.job);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      first_name: firstName,
      last_name: lastName,
      description: description,
      linkedin_address: linkedIn,
      job: job,
    });
    handleClose();
  };

  return (
    <div className="EditProfile">

      <button className="my-2 btn btn-primary" onClick={handleShow}>Edit profile</button>

      <Modal show={show} onHide={handleClose} role="dialog" aria-labelledby="Form to add a new post" >
        <Modal.Header closeButton>
          <Modal.Title>Edit profile</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <form show={show} onSubmit={handleSubmit}>
            <div className="form-group">
              <label>First name</label>
              <input
                required
                value={firstName}
                className="form-control"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Last name</label>
              <input
                required
                value={lastName}
                className="form-control"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                required
                value={description}
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>LinkedIn</label>
              <input
                value={linkedIn}
                className="form-control"
                onChange={(e) => setLinkedIn(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Job</label>
              <input
                value={job}
                className="form-control"
                onChange={(e) => setJob(e.target.value)}
              />
            </div>
            <button className="btn btn-primary float-right">Update</button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditProfile;