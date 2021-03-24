import { useEffect, useState } from "react";
import FormCheck from "react-bootstrap/FormCheck";
import useFetch from "hooks/useFetch";

const AddCategories = ({ learningPath }) => {
  const { data, error, isLoading, patch, get } = useFetch();
  const { checked, setChecked } = useState("");

  const handleChecked =() => {
    setChecked("Checked");
  };

  const previousCategories = learningPath.categories.map((category) => category.id);

  const isChecked =(categoryId) =>{
    if(previousCategories.includes(categoryId)){
      setChecked("checked");
    } 
    setChecked("");
  };

  useEffect(()=> {
    get("/admin/categories");
    return;
  },[]);

  console.log(data);
  console.log(learningPath);
  console.log(previousCategories);
  
  return (
    <>
      {(data) && (
        data.map((category) =>
          { isChecked(category.id) && (
            <FormCheck
              key={category.id}
              type="checkbox"
              label={category.title}
              checked={checked}
              onChange={() => handleChecked}
            />
          )}))}
      
    </>
  );
};
    
export default AddCategories;