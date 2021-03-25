import { useState } from "react";
import Form from "react-bootstrap/Form";

const CategoryCheckbox = ({category, learningPath, setCategoryList}) => {
  const [previousCategories, setPreviousCategories] = useState(
    learningPath.categories && 
    learningPath.categories.map((category) => category.id) || []
  );
  const [checked, setChecked] = useState(previousCategories.includes(Number(category.id)) && "checked");

  const handleChecked =(event) => {
    if (event.target.checked) {
      setPreviousCategories([...previousCategories, event.target.value]);
      setCategoryList([...previousCategories, event.target.value]);
      setChecked("checked");
    } else {
      setPreviousCategories(
        previousCategories.filter((category) => category !== Number(event.target.value))
      );
      setCategoryList(
        previousCategories.filter((category) => category !== Number(event.target.value))
      );
      setChecked("");
    }
  };

  return (
    <>
      <Form.Check
        type="checkbox"
        label={category.title}
        value={category.id}
        checked = {checked}
        onChange={handleChecked}
      />
    </>
  );
};

export default CategoryCheckbox;
