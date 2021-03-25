import { useState } from "react";
import { Form } from "react-bootstrap";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import useFetch from "hooks/useFetch";
import { useTranslation } from "react-i18next";

const ApprovalLine = ({ user, getReviewedUser }) => {
  const { patch } = useFetch();
  const [role, setRole] = useState("student");
  const { t } = useTranslation("admin");

  const editUser = (id, approved) => {
    patch(`/admin/users/${id}`, { is_approved: approved, role: role });
    getReviewedUser(id);
  };

  const handleChange = (event) => {
    setRole(event.target.value);
  };
  return (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
      <td>
        <>
          <Form.Control as="select" value={role} onChange={handleChange}>
            <option value="student">{t("student")}</option>
            <option value="teacher">{t("teacher")}</option>
            ))
          </Form.Control>
        </>
      </td>
      <td>
        <AiFillCheckCircle
          size={30}
          style={{ color: "green" }}
          onClick={() => editUser(user.id, true)}
        />
      </td>
      <td>
        <AiFillCloseCircle
          size={30}
          style={{ color: "red" }}
          onClick={() => editUser(user.id, false)}
        />
      </td>
    </tr>
  );
};

export default ApprovalLine;
