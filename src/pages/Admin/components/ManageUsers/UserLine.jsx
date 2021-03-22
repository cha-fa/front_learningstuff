import React from "react";
import useFetch from "hooks/useFetch";
import { AiFillCloseCircle } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const UserLine = ({ user, onDeleteUser }) => {
  const { destroy } = useFetch();
  const { t } = useTranslation("admin");

  const userDelete = (id) => {
    if (window.confirm(t("are_you_sure"))) {
      destroy(`/admin/users/${id}`, onDeleteUser);
    }
  };

  return (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.email}</td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.role}</td>
      <td>
        {(user.role === "admin" && <p>Admin </p>) || (
          <AiFillCloseCircle
            size={30}
            style={{ color: "red" }}
            onClick={() => userDelete(user.id)}
          />
        )}
      </td>
    </tr>
  );
};

export default UserLine;
