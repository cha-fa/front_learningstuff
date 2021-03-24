import { AiOutlineEdit, AiFillCheckCircle} from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import { useState } from "react";
import useFetch from "hooks/useFetch"; 
import { useTranslation } from "react-i18next";

const  CategoryLine = ({category, handleEdit}) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(category.title);
  const { patch, destroy } = useFetch();
  const { t } = useTranslation("admin");

  const handleClickEdit = () => {
    if (!editing){
      setEditing(true);
    } else {
      patch(`/admin/categories/${category.id}`, {
        title: title,
      });
      setEditing(false);
      handleEdit;
    }
  };

  const handleDelete =(categoryId) => {
    if (window.confirm(t("are_you_sure"))) {
      destroy(`/admin/categories/${category.id}`, 
      handleEdit);
    }
  };
    
return (
    <tr key={category.id}>
      <td>{category.id}</td>
      <td>
        {(editing && (
          <input
            placeholder={title}
            defaultValue={title}
            onChange={() => setTitle(event.target.value)}
          />
        )) || (title)}
      </td>
      <td>
        {(!editing && (
          <span className="ml-3">
            <AiOutlineEdit
              size={30}
              onClick={handleClickEdit}
              style={{ color: "orange" }}
            />
          </span>
          )) || (
          <>
            <span className="ml-3">
              <AiFillCheckCircle
                onClick={handleClickEdit}
                size={30}
                style={{ color: "green" }}
              />
            </span>
            <span className="ml-3">
              <TiDelete    
                onClick={() => handleDelete(category.id)}
                size={40}
                style={{ color: "red" }}
              />
            </span>
          </>
        )}
      </td>
    </tr>
  );
};
    
export default CategoryLine;