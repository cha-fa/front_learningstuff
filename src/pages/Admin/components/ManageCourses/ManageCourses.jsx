import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";
import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import CourseLine from "./CourseLine";

const ManageCourses = () => {
  const { data, error, isLoading, get } = useFetch();
  const { t } = useTranslation("admin");

  const handleEdit = () => {
    get("/admin/courses");
  };

  useEffect(() => {
    get("/admin/courses");
    return;
  }, []);

  return (
    <div className="ManageCourses">
      {error && <h4>{error}</h4>}
      {(isLoading && t("loading")) ||
        (data && (
          <>
            <div className="text-center">
              <h3>{t("manage_courses")}</h3>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>{t("title")}</th>
                  <th>{t("in_learning_paths")}</th>
                  <th>{t("delete")}</th>
                </tr>
              </thead>
              <tbody>
                {data.map((course) => (
                  <CourseLine
                    key={course.id}
                    course={course}
                    handleEdit={handleEdit}
                  />
                ))}
              </tbody>
            </Table>
          </>
        ))}
    </div>
  );
};

export default ManageCourses;
