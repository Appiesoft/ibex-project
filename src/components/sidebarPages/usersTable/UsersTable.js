import React, { useState } from "react";
import "./UsersTable.css";
import { NavLink } from "react-router-dom";
import { Form, Row, Table, Tooltip } from "react-bootstrap";
import UserEdit from "./modal/userEdit/UserEdit";
import UserDetails from "./modal/userDetails/UserDetails";

const UsersTable = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalDetailsShow, setModalDetailsShow] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <main className="main-container">
        <section>
          <NavLink
            className="d-block d-sm-inline-block add_new_btn"
            to="/add-new-student"
          >
            <span className="p-2 bg-cyan-500 text-white rounded-1">
              <i className="fa fa-plus me-2"></i>
              Add Users
            </span>
          </NavLink>
          <Row className=" mx-auto mt-5">
            <div className="col-sm-12 col-md-6 ps-0">
              <div className="mt-3 w-25 " id="users-list_length">
                <label className="d-flex align-items-center text-black">
                  Show
                  <Form.Select
                  type="number"
                  className="mx-2"
                                          name="university"
                                          defaultValue="Choose..."
                                        >
                                          <option hidden>10</option>
                                          <option value="1">10</option>
                                          <option value="2">20</option>
                                        </Form.Select>
                  entries
                </label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 d-flex justify-content-end">
              <div className="dataTables_filter align-self-end">
                <label className="d-flex align-baseline text-black">
                  Search:
                  <input
                    type="search"
                    className="form-control form-control-sm ms-2"
                    placeholder=""
                    aria-controls="users-list"
                  />
                </label>
              </div>
            </div>
          </Row>
          <Table striped bordered className="mt-3 ">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>RegisterDate</th>
                <th>Confirmed</th>
                <th>Country</th>
                <th>Roles</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Admission 1</td>
                <td>australia1@theibex.in</td>
                <td>2023-07-28</td>
                <td>Yes</td>
                <td>Australia</td>
                <td>Admission</td>
                <td>
                  <span
                    onClick={toggleDropdown}
                    className={` ${
                      !isOpen
                        ? "boxinactive bg-cyan-500 px-3 py-1 rounded-1 text-white"
                        : "boxactive bg-cyan-500 px-3 py-1 rounded-1 text-white"
                    }`}
                  >
                    {" "}
                    <span>Users</span>
                    <i
                      className={` ${
                        !isOpen
                          ? "fa-sharp fa-solid fa-caret-down ms-2"
                          : "fa-sharp fa-solid fa-caret-up ms-2"
                      }`}
                    ></i>
                    {isOpen && (
                      <div className="position-absolute  m-3 btn-profile border">
                        <h6
                          className="px-3 py-2 m-0 hover:bg-zinc-100 text-slate-500"
                          onClick={() => setModalShow(true)}
                        >
                          <span>
                            <i class="fa fa-edit me-2" aria-hidden="true"></i>
                          </span>
                          Edit
                        </h6>
                        <h6
                          className="px-3 py-2 m-0 hover:bg-zinc-100 text-slate-500"
                          onClick={() => setModalDetailsShow(true)}
                        >
                          <span>
                            <i class="fa-solid fa-list me-2"></i>
                          </span>
                          Details
                        </h6>
                        <h6 className="px-3 py-2 m-0 hover:bg-zinc-100 text-slate-500">
                          <span>
                            <i class="fa-solid fa-ban me-2"></i>
                          </span>
                          Ban
                        </h6>
                        <h6 className="px-3 py-2 m-0 hover:bg-zinc-100 text-slate-500">
                          <span>
                            <i class="fa-solid fa-trash me-2"></i>
                          </span>
                          Delete
                        </h6>
                        <h6 className="px-3 pt-2 pb-3 m-0 border-top hover:bg-zinc-100 text-slate-500">
                          <span>Change Role</span>
                        </h6>
                      </div>
                    )}
                  </span>
                </td>
              </tr>
            </tbody>
            <div>
              <UserEdit show={modalShow} onHide={() => setModalShow(false)} />
              <UserDetails
                show={modalDetailsShow}
                onHide={() => setModalDetailsShow(false)}
              />
            </div>
          </Table>
        </section>
      </main>
    </>
  );
};

export default UsersTable;
