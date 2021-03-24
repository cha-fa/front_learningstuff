import { AiOutlineEdit } from "react-icons/ai"; 
 
const  CategoryLine = ({category, handleEdit}) => {
    
return (
    <tr key={category.id}>
      <td>{category.id}</td>
      <td>{category.title}</td>
      <td>
        <span className="ml-3">
          <AiOutlineEdit
            size={30}
            //onClick={handleClickEdit}
            style={{ color: "orange" }}
          />
        </span>
      </td>
    </tr>
  );
};
    
export default CategoryLine;