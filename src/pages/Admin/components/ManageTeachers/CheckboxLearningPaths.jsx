import { useState } from "react";
import {  Form } from "react-bootstrap";
import useFetch from "hooks/useFetch";

const CheckboxLearningPaths = ( { learningPath,  title, teacher } ) => {

  const [isChecked, setIsChecked] = useState(teacher.learning_paths.some(l => l.id === learningPath.id));
  const {  post, destroy } = useFetch();

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
