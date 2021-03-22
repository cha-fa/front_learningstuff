import useFetch from "hooks/useFetch";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import UserLine from "./UserLine";

const ManageUsers = () => {
  const { data, error, isLoading, get } = useFetch();
  const { t } = useTranslation("admin");

  const handleDeletedUser = () => {
    get("/admin/users");
  };

  useEffect(() => {
    get("/admin/users");
  }, []);

  return (
    <div className="ManageUser">
      {error && <h4>{error}</h4>}
      {(isLoading && t("loading")) ||
        (data && (
          <>
            <div className="text-center">
              <h3>{t("manage_users")}</h3>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>{t("first_name")}</th>
                  <th>{t("last_name")}</th>
                  <th>{t("email")}</th>
                  <th>{t("role")}</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user) => (
                  <UserLine
                    key={user.id}
                    user={user}
                    onDeleteUser={handleDeletedUser}
                  />
                ))}
              </tbody>
            </Table>
          </>
        ))}
    </div>
  );
};

export default ManageUsers;
