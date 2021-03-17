import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <NavLink className="nav-link" to="/admin/approvals">
        Manage Approvals
      </NavLink>
      <NavLink className="nav-link" to="/admin/users">
        Manage All Users
      </NavLink>
    </div>
  );
};

export default Sidebar;
