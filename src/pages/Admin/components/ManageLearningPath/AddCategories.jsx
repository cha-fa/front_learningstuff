import { useEffect, useState } from "react";
import FormCheck from "react-bootstrap/FormCheck";
import Form from "react-bootstrap/Form";
import useFetch from "hooks/useFetch";

const AddCategories = ({ learningPath }) => {
  const { data, error, isLoading, patch, get } = useFetch();
  const { checked, setChecked } = useState(false);

  const handleChecked =() => {
    setChecked(true);
  };

  const previousCategories = learningPath.categories.map((category) => category.id);

  useEffect(()=> {
    get("/admin/categories");
    return;
  },[]);
  
  return (
    <>
      <Form.Group key={learningPath.id}>
      {(data) && (
        data.map((category) => {
          previousCategories.includes(category.id) ? (() => setChecked(true)):(()=> setChecked(false));
        return (
          <FormCheck
              key={category.id}
              type="checkbox"
              label={category.title}
              value={category.title}
              checked={checked}
              onChange={() => handleChecked}
            />);}
          )
        )
      }
      </Form.Group>
    </>
  );
};
    
export default AddCategories;