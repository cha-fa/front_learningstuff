import React from "react";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import useFetch from "hooks/useFetch";
import Button from "react-bootstrap/Button";
import CategoryCheckbox from "./CategoryCheckbox";
import { useTranslation } from "react-i18next";

const AddCategories = ({ learningPath, setEditing, handleCategoryEdit}) => {
  const { data, error, isLoading, patch, get } = useFetch();
  const [CategoryList, setCategoryList] = useState();
  const { t } = useTranslation("admin");

  const handleCategories =() => {
    patch(`/admin/learning_paths/${learningPath.id}`, {
      added_category_id: CategoryList.join(),
      learning_path: learningPath,
    });
    get("/admin/learning_paths");
    setEditing(false);
  };

  useEffect(()=> {
    get("/admin/categories");
    return;
  },[]);

  return (
    <>
      <Form>
      {error && <h4>{error}</h4>}
      {(isLoading && t("loading")) ||
        data && (
          data.map((category) =>
            <CategoryCheckbox key={category.id} 
            category={category} 
            learningPath={learningPath}
            setCategoryList={setCategoryList}
            />
            )
          )
        }
        <Button onClick={handleCategories}>valider</Button>
      </Form>
    </>
  );
};
    
export default AddCategories;