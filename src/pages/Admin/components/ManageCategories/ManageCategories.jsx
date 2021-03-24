import { useTranslation } from "react-i18next";
import useFetch from "hooks/useFetch";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import CategoryLine from "./CategoryLine";
import NewCategory from "./NewCategory";

const ManageCategories = () => {
  const { data, error, isLoading, get } = useFetch();
  const { t } = useTranslation("admin");
  
  const handleEdit =() =>{
    get("/admin/categories");
  };

  useEffect(() => {
    get("/admin/categories");
    return;
  }, []);

return (
  <div className="ManageCategories">
    {error && <h4>{error}</h4>}
      {(isLoading && t("loading")) ||
        (data && (
          <>
            <div className="text-center">
              <h3>{t("manage_categories")}</h3>
            </div>
            <NewCategory handleEdit={handleEdit}/>
            <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>{t("categories")}</th>
                <th>{t("edit")}</th>
              </tr>
            </thead>
            <tbody>
               {data.map((category) => (
                  <CategoryLine
                    key={category.id}
                    category={category}
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
    
export default ManageCategories;