import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";
import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ApprovalLine from "./ApprovalLine";

const ManageApproval = () => {
  const { data, error, isLoading, get } = useFetch();
  const [reviewedUser, setReviewedUser] = useState("");
  const { t } = useTranslation("admin");

  const getReviewedUser = (user) => {
    setReviewedUser(user);
  };

  useEffect(() => {
    get("/admin/users?is_reviewed=false");
  }, [reviewedUser]);

  return (
    <div className="ManageApproval">
      {error && <h4>{error}</h4>}
      {(isLoading && t("loading")) ||
        (data && (
          <>
            <div className="text-center">
              <h3>{t("title")}</h3>
              <p className="lead">
                {t("pending_for_review")} : {data.length}
              </p>
            </div>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>{t("first_name")}</th>
                  <th>{t("last_name")}</th>
                  <th>{t("email")}</th>
                  <th>{t("role")}</th>
                  <th colSpan="2">{t("approval?")}</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user) => (
                  <ApprovalLine
                    key={user.id}
                    user={user}
                    getReviewedUser={getReviewedUser}
                  />
                ))}
              </tbody>
            </Table>
          </>
        ))}
    </div>
  );
};

export default ManageApproval;
