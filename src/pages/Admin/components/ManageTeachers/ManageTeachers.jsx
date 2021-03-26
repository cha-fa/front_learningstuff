import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import useFetch from "hooks/useFetch";
import { Table } from "react-bootstrap";
import TeacherLine from "./TeacherLine";
  
const ManageTeachers = () => {

  const { data, error, isLoading, get } = useFetch();
  const { data:learningPaths, error:errorLearningPaths, isLoading:isLoadingLearningPaths, get:getLearningPaths} = useFetch();
  const { t } = useTranslation("admin");

  const handleEdit =() =>{
    get("/admin/users?is_teacher=true");
  };

  useEffect(() => {
    get("/admin/users?is_teacher=true");
    getLearningPaths("/admin/learning_paths");
  }, []);


    console.log("data", data);


return (
<div className='ManageTeachers'>
{error && <h4>{error}</h4>}
      {(isLoading && t("loading")) ||
        (data && (
          <>
            <div className="text-center">
              <h3>{t("manage_teachers")}</h3>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>{t("first_name")}</th>
                  <th>{t("last_name")}</th>
                  <th>{t("email")}</th>
                  <th>{t("title_learning_path")}</th>
                  <th>{t("update")}</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user) => (
                  <TeacherLine
                    key={user.id}
                    teacher={user}
                    handleEdit={handleEdit}
                    learningPaths={learningPaths}
                  />
                ))}
              </tbody>
            </Table>
          </>
        ))}
</div>
);
};
  
export default ManageTeachers;