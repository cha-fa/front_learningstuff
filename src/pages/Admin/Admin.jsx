import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import AdminRoute from "components/AdminRoute";
import { Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import ManageApproval from "./components/ManageApproval/ManageApproval";
import ManageUsers from "./components/ManageUsers/ManageUsers";
import ManageLearningPath from "./components/ManageLearningPath/ManageLearningPath";
import ManageCategories from "./components/ManageCategories/ManageCategories";
import ManageCourses from "./components/ManageCourses/ManageCourses";
import ImportCourse from "./components/ManageCourses/ImportCourse";
import ManageTeachers from "./components/ManageTeachers/ManageTeachers";

const Admin = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <div className="Admin">
      <Row className="m-0 p-0">
        <Col md={2} className="m-0 p-0">
          <Sidebar />
        </Col>
        <Col md={10} className="m-0 p-0">
          <Container>
            <Switch>
              <AdminRoute
                currentUser={currentUser}
                component={ManageApproval}
                path="/admin"
                exact
              />
              <AdminRoute
                currentUser={currentUser}
                component={ManageApproval}
                path="/admin/approvals"
              />
              <AdminRoute
                currentUser={currentUser}
                component={ManageUsers}
                path="/admin/users"
              />
              <AdminRoute
                currentUser={currentUser}
                component={ManageCategories}
                path="/admin/categories"
              />
              <AdminRoute
                currentUser={currentUser}
                component={ManageLearningPath}
                path="/admin/learning_paths"
              />
              <AdminRoute
                currentUser={currentUser}
                component={ManageCourses}
                path="/admin/courses"
              />
              <AdminRoute
                currentUser={currentUser}
                component={ImportCourse}
                path="/admin/import"
              />
              <AdminRoute
                currentUser={currentUser}
                component={ManageTeachers}
                path="/admin/teachers"
              />
            </Switch>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
