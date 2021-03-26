import { useEffect, useState } from "react";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import { FormGroup, FormLabel, FormControl, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import useFetch from "hooks/useFetch";

const CheckboxLearningPaths = ( { learningPath,  title, teacher } ) => {

  const { t } = useTranslation("admin");
  const [isChecked, setIsChecked] = useState(teacher.learning_paths.some(l => l.id === learningPath.id));
  const { data, post, patch, destroy } = useFetch();

 

  const handleChange = () => {

    if(!isChecked){
      post(
        "/admin/subscriptions",
        {
          user_id: teacher.id,
          learning_path_id: learningPath.id,
        },
      );
    }

    if(isChecked){
      const id = teacher.subscriptions.find(l => l.learning_path.id === learningPath.id);
      destroy(`/admin/subscriptions/${id.id}`);
    }
      
    setIsChecked(!isChecked);


  };


return (
  <div className='CheckboxLearningPaths'>
    <Form.Check 
      type="checkbox"
      id={learningPath.id}
      label={title}
      checked={isChecked}
      onChange={handleChange}
    />
  </div>
);
};
  
export default CheckboxLearningPaths;
