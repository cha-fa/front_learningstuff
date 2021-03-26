import { useEffect } from "react";
import useFetch from "hooks/useFetch";
import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import LearningPathLine from "./LearningPathLine";
import NewLearningPath from "./NewLearningPath";

const ManageLearningPath = () => {
  const { data, error, isLoading, get } = useFetch();
  const { t } = useTranslation("admin");

  const handleEdit = () => {
    get("/admin/learning_paths");
  };

  useEffect(() => {
    get("/admin/learning_paths");
    return;
  }, []);

  return (
    <div className="ManageLearningPath">
      {error && <h4>{error}</h4>}
      {(isLoading && t("loading")) ||
        (data && (
          <>
            <div className="text-center">
              <h3>{t("manage_learning_paths")}</h3>
            </div>
            <NewLearningPath handleEdit={handleEdit} />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>{t("title")}</th>
                  <th>{t("price_in_cents")}</th>
                  <th>{t("courses_list")}</th>
                  <th>{t("edit")}</th>
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
