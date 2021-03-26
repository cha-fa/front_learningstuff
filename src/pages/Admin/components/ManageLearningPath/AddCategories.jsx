import React from "react";
import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import useFetch from "hooks/useFetch";
import CategoryCheckbox from "./CategoryCheckbox";
import { useTranslation } from "react-i18next";

const AddCategories = ({ learningPath }) => {
  const { data, error, isLoading, get } = useFetch();
  const { t } = useTranslation("admin");

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
            />
            )
          )
        }
      </Form>
    </>
  );
};
    
export default AddCategories;