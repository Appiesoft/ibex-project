import { useState } from "react";
import Header from "../header/Header";

import Sidebar from "../sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import MyProfile from "../sidebarPages/myProfile/MyProfile";
import Home from "../home/Home";
import Students from "../sidebarPages/Students/Students";
import UsersTable from "../sidebarPages/usersTable/UsersTable";
import University from "../sidebarPages/university/University";
import PrimaryAgents from "../sidebarPages/primaryAgents/PrimaryAgents";
import SubAgents from "../sidebarPages/subAgents/SubAgents";
import AddNewStudent from "../addNewStudent/AddNewStudent";
import UserRoles from "../sidebarPages/userRoles/UserRoles";
import AddNewPrimaryAgents from "../sidebarPages/primaryAgents/addNewPrimaryAgents/AddNewPrimaryAgents";
import EditPrimaryAgents from "../sidebarPages/primaryAgents/editPrimaryAgents/EditPrimaryAgents";
import DetailPrimaryAgents from "../sidebarPages/primaryAgents/detailPrimaryAgents/DetailPrimaryAgents";
import ProccessingStudent from "../addNewStudent/proccessingStudent/ProccessingStudent";
import OlApplied from "../addNewStudent/olApplied/OlApplied";
import Index from "../addNewStudent/index/Index";

function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/students" element={<Students />} />
        <Route exact path="/user-details" element={<UsersTable />} />
        <Route exact path="/user-roles" element={<UserRoles />} />
        <Route exact path="/university" element={<University />} />
        <Route exact path="/primary-agents" element={<PrimaryAgents />} />
        <Route exact path="/sub-agents" element={<SubAgents />} />
        <Route exact path="/add-new-student" element={<AddNewStudent />} />
        <Route exact path="/add-new-primary-agents" element={<AddNewPrimaryAgents/>} />
        <Route exact path="/edit-add-new-primary-agents" element={<EditPrimaryAgents/>} />
        <Route exact path="/details-primary-agents" element={<DetailPrimaryAgents/>} />
        <Route exact path="/proccessing-student" element={<ProccessingStudent/>} />
        <Route exact path="/ol-applied" element={<OlApplied/>} />
        <Route exact path="/add-student" element={<Index/>} />
      </Routes>
    
    </div>
  );
}

export default Dashboard;
