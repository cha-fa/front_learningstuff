import { useState } from "react";
import Form from "react-bootstrap/Form";
import useFetch from "hooks/useFetch";

const CategoryCheckbox = ({category, learningPath }) => {
  const { patch } = useFetch();
  const [categoriesList, setCategoriesList] = useState(
    learningPath.categories && 
    learningPath.categories.map((category) => category.id) || []
  );
  const [checked, setChecked] = useState(categoriesList.includes(Number(category.id)) && "checked");

  const handleChecked =(event) => {
    if (event.target.checked) {
      patch(`/admin/learning_paths/${learningPath.id}`, {
        added_category_id: event.target.value,
        learning_path: learningPath,
      });
      setCategoriesList([...categoriesList, event.target.value]);
      setChecked("checked");
    } else {
      patch(`/admin/learning_paths/${learningPath.id}`, {
        added_category_id: event.target.value,
        learning_path: learningPath,
      });
      setCategoriesList(
        categoriesList.filter((category) => category != event.target.value)
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
