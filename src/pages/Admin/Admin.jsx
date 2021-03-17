import React from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import AdminRoute from "components/AdminRoute";
import { Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import ManageApproval from "./components/ManageApproval/ManageApproval";
import ManageUsers from "./components/ManageUsers";

const Admin = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <div className="Admin">
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col md={10}>
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
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
