import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logonew from "../../Images/logonew.jpg";
import './Sidebar.css'
function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);

  };
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <img src={logonew} alt="" />
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <NavLink to="">
            <i class=" me-3 fa fa-home" aria-hidden="true"></i>Dashboard
          </NavLink>
        </li>
        <li className={` ${!isOpen ? "boxinactive sidebar-list-item" : "boxactive sidebar-list-item"}`} onClick={toggleDropdown} >
          <NavLink className="d-flex justify-content-between">
          <span><i class="fa fa-home me-3"></i>Students</span>
              <i className={` ${!isOpen ? "fa fa-angle-down" : "fa fa-angle-up"}`}></i>
          </NavLink>
        </li>
        {isOpen && (
            <ul className="nav flex-column dropdown_color border-0 ps-4">
          <li className="nav-item my-2">
            <NavLink className="sidebar-list-item" to="">
            <span><i class="fa fa-angle-right me-2" aria-hidden="true"></i></span>All Students Australia
            </NavLink>
          </li>
          <li className="nav-item my-2">
            <NavLink className="sidebar-list-item" to="">
            <span><i class="fa fa-angle-right me-2" aria-hidden="true"></i></span>Add New Student Australia
            </NavLink>
          </li>
          <li className="nav-item my-2">
            <NavLink className="sidebar-list-item" to="">
            <span><i class="fa fa-angle-right me-2" aria-hidden="true"></i></span>All Students Canada
            </NavLink>
          </li>
          <li className="nav-item my-2">
            <NavLink className="sidebar-list-item" to="">
            <span><i class="fa fa-angle-right me-2" aria-hidden="true"></i></span>All New Students Canada
            </NavLink>
          </li>
          </ul>
              )}
        <li className="sidebar-list-item">
          <NavLink to="/my-profile">
            <i class="me-3 fa fa-user" aria-hidden="true"></i>My Profile
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="/user-details">
            <i class="me-3 fa fa-users " aria-hidden="true"></i>Users
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="/user-roles">
            <i class="me-3 fa fa-user-secret" aria-hidden="true"></i>Users Roles
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="/primary-agents">
            <i class="me-3 fa fa-user-secret" aria-hidden="true"></i>Primary Agents
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="/sub-agents">
            <i class="me-3 fa fa-user-secret" aria-hidden="true"></i>Sub Agents
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="/university">
            <i class="me-3 fa fa-building" aria-hidden="true"></i>University
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
