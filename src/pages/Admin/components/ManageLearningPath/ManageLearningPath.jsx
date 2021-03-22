import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";
import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import LearningPathLine from "./LearningPathLine";

const ManageLearningPath = () => {
  const { data, error, isLoading, get } = useFetch();
  const { t } = useTranslation("admin");

  const handleEdit = () => {
    console.log("INPARENT EDIT");
    get("/admin/learning_paths");
  };

  useEffect(() => {
    get("/admin/learning_paths");
  }, []);

  return (
    <div className="ManageLearningPath">
      {error && <h4>{error}</h4>}
      {(isLoading && t("loading")) ||
        (data && (
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>{t("title")}</th>
                  <th>{t("price")}</th>
                  <th>{t("courses_list")}</th>
                  <th>EDIT</th>
                </tr>
              </thead>
              <tbody>
                {data.map((learning_path) => (
                  <LearningPathLine
                    key={learning_path.id}
                    learningPath={learning_path}
                    handleEdit={handleEdit}
                  />
                ))}
              </tbody>
            </Table>
          </>
        ))}
    </div>
  );
};

export default ManageLearningPath;
