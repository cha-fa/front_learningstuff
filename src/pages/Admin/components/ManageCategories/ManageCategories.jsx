import { useTranslation } from "react-i18next";
import useFetch from "hooks/useFetch";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";

const ManageCategories = () => {
  const { data, error, isLoading, get } = useFetch();
  const { t } = useTranslation("admin");
    
  useEffect(() => {
    get("/categories");
    return;
  }, []);

  console.log(data);

return (
  <div className="ManageCategories">
    {error && <h4>{error}</h4>}
      {(isLoading && t("loading")) ||
        (data && (
          <>
            <div className="text-center">
              <h3>{t("manage_categories")}</h3>
            </div>
            <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>{t("title")}</th>
                <th>{t("edit")}</th>
              </tr>
            </thead>
            <tbody>
              {/* {data.map((category) => (
                  <CategoryLine
                    key={category.id}
                    learningPath={category}
                    handleEdit={handleEdit}
                  />
                ))} */}
            </tbody>
          </Table>
          </>
        ))}
  </div>
  );
};
    
export default ManageCategories;