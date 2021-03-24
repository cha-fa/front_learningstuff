import useFetch from "hooks/useFetch";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const CategorieLearningPath = ({handleCategoryFilter}) => {
  
  const { get, error, data } = useFetch();
  const [category, setCategory]= useState("");
  const [categoryList, setCategoryList] = useState([]);


  const handleCheckbox = (e) =>{
    if (e.target.checked){
      setCategoryList([...categoryList, e.target.value]);
      handleCategoryFilter([...categoryList, e.target.value]);
    } else {
      setCategoryList(categoryList.filter((category) => category !== e.target.value));
      handleCategoryFilter(categoryList.filter((category) => category !== e.target.value));
    }
  };


  useEffect(()=> {
    get("/categories");
  }, []);
  

  
 useEffect(() => {
   setCategory(data);
 }, [data]);

  return (
  <>
  {error && <h4>{error}</h4>}
  {category &&
  <Form className="d-flex justify-content-center">
  {category.map((type) => (
    <div key={type.id} className="mb-3">
      <Form.Check 
       inline label={type.title}
       onChange={handleCheckbox}
       type="checkbox"
       value ={type.id}
       id="inline-checkbox-1"
      />
    </div>
  ))}
  </Form>
  }
  </>
  );
  };
    
  export default CategorieLearningPath;