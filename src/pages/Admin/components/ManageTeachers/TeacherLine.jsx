import { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import CheckboxLearningPaths from "./CheckboxLearningPaths";
import { Form } from "react-bootstrap";

const TeacherLine = ({ teacher, handleEdit, learningPaths }) => {


  const [teacherLearningPaths, setTeacherLearningPaths] = useState([]);
  const [editing, setEditing] = useState(false);

  const { t } = useTranslation("admin");

  
  const updateTeacherLearningPaths = (learningPaths) => {
    if(editing){
      setEditing(false);
      handleEdit();
      return;
    }
    setEditing(true);
    setTeacherLearningPaths(learningPaths);

    };

  
  console.log("teacher", teacher);

  return (
    <tr key={teacher.id}>
      <td>{teacher.id}</td>
      <td>{teacher.first_name}</td>
      <td>{teacher.last_name}</td>
      <td>{teacher.email}</td>
      
  
      {!editing ?
        <td>{teacher.learning_paths.map(l => l.title).join(",")}</td>

        :

        (learningPaths && 
          <td>
            <Form>
              {learningPaths.map((learningPath) => (
                <CheckboxLearningPaths 
                  key={learningPath.id} 
                  title={learningPath.title} 
                  learningPath={learningPath}
                  teacher={teacher}
                  handleEdit={handleEdit}
                />
              ))}
            </Form>
          </td>
        )

      }
 


      <td>
      <span className="ml-3">
            <AiOutlineEdit
              size={30}
              onClick={updateTeacherLearningPaths}
              style={{ color: "orange" }}
            />
          </span>
      </td>
    </tr>
  );
};

export default TeacherLine;
