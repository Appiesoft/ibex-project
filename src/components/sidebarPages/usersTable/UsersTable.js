import React, { useState } from "react";
import "./UsersTable.css";
import { NavLink } from "react-router-dom";
import { Form, Row, Table, Tooltip } from "react-bootstrap";
import UserEdit from "./modal/userEdit/UserEdit";
import UserDetails from "./modal/userDetails/UserDetails";
import ChangeRole from "./modal/changeRole/ChangeRole";

const UsersTable = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalDetailsShow, setModalDetailsShow] = useState(false);
  const [modalRoleShow, setModalRoleShow] = useState(false);
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
          <Row className=" mx-auto mt-lg-5 mt-2">
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
            <div className="col-sm-12 col-md-6 d-flex justify-content-lg-end justify-content-sm-start ps-0 mt-3 mt-lg-0">
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
          <div className="overflow-scroll ">
            <Table striped bordered className="mt-3 position-relative">
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
                    <div class="dropdown">
                      <button
                        class="btn btn dropdown-toggle bgDrop"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        User
                      </button>
                      <ul class="dropdown-menu">
                        <li className="d-flex cursor-pointer"   onClick={() => setModalShow(true)}>
                          <span className="bg-light p-1 px-2 ms-3 ">
                            <i
                              className=" text-zinc-500 fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <h6 className="text-zinc-500 pt-1 ps-1">Edit</h6>
                        </li>
                        <li className="d-flex cursor-pointer" >
                          <span className=" text-zinc-500 p-1 px-2 ms-3">
                            <i class="fa fa-ban" aria-hidden="true"></i>
                          </span>
                          <h6 className="text-zinc-500 pt-1 ps-1">Ban</h6>
                        </li>
                        <li className="d-flex cursor-pointer"  onClick={() => setModalDetailsShow(true)}>
                          <span className="bg-light p-1 px-2 ms-3">
                            <i
                              className=" text-zinc-500 fa fa-list"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <h6 className="text-zinc-500 pt-1 ps-1">Details</h6>
                        </li>
                        <li className="d-flex cursor-pointer">
                          <span className="bg-light p-1 px-2 ms-3">
                            <i
                              className=" text-zinc-500 fa fa-trash"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <h6 className="text-zinc-500 pt-2 ps-2">Delete</h6>
                        </li>
                        <li className="d-flex cursor-pointer border-top"  onClick={() => setModalRoleShow(true)}>
                          <span className=" text-zinc-500 ps-4 ">
                            <h6 className="text-zinc-500 pt-2 ps-1">
                              Change Roles
                            </h6>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Admission 1</td>
                  <td>australia1@theibex.in</td>
                  <td>2023-07-28</td>
                  <td>Yes</td>
                  <td>Australia</td>
                  <td>Admission</td>
                  <td>
                    <div class="dropdown">
                      <button
                        class="btn btn dropdown-toggle bgDrop"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        User
                      </button>
                      <ul class="dropdown-menu">
                        <li className="d-flex cursor-pointer"   onClick={() => setModalShow(true)}>
                          <span className="bg-light p-1 px-2 ms-3 ">
                            <i
                              className=" text-zinc-500 fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <h6 className="text-zinc-500 pt-1 ps-1">Edit</h6>
                        </li>
                        <li className="d-flex cursor-pointer" >
                          <span className=" text-zinc-500 p-1 px-2 ms-3">
                            <i class="fa fa-ban" aria-hidden="true"></i>
                          </span>
                          <h6 className="text-zinc-500 pt-1 ps-1">Ban</h6>
                        </li>
                        <li className="d-flex cursor-pointer"  onClick={() => setModalDetailsShow(true)}>
                          <span className="bg-light p-1 px-2 ms-3">
                            <i
                              className=" text-zinc-500 fa fa-list"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <h6 className="text-zinc-500 pt-1 ps-1">Details</h6>
                        </li>
                        <li className="d-flex cursor-pointer">
                          <span className="bg-light p-1 px-2 ms-3">
                            <i
                              className=" text-zinc-500 fa fa-trash"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <h6 className="text-zinc-500 pt-2 ps-2">Delete</h6>
                        </li>
                        <li className="d-flex cursor-pointer border-top"  onClick={() => setModalRoleShow(true)}>
                          <span className=" text-zinc-500 ps-4 ">
                            <h6 className="text-zinc-500 pt-2 ps-1">
                              Change Roles
                            </h6>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Admission 1</td>
                  <td>australia1@theibex.in</td>
                  <td>2023-07-28</td>
                  <td>Yes</td>
                  <td>Australia</td>
                  <td>Admission</td>
                  <td>
                    <div class="dropdown">
                      <button
                        class="btn btn dropdown-toggle bgDrop"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        User
                      </button>
                      <ul class="dropdown-menu">
                        <li className="d-flex cursor-pointer"   onClick={() => setModalShow(true)}>
                          <span className="bg-light p-1 px-2 ms-3 ">
                            <i
                              className=" text-zinc-500 fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <h6 className="text-zinc-500 pt-1 ps-1">Edit</h6>
                        </li>
                        <li className="d-flex cursor-pointer" >
                          <span className=" text-zinc-500 p-1 px-2 ms-3">
                            <i class="fa fa-ban" aria-hidden="true"></i>
                          </span>
                          <h6 className="text-zinc-500 pt-1 ps-1">Ban</h6>
                        </li>
                        <li className="d-flex cursor-pointer"  onClick={() => setModalDetailsShow(true)}>
                          <span className="bg-light p-1 px-2 ms-3">
                            <i
                              className=" text-zinc-500 fa fa-list"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <h6 className="text-zinc-500 pt-1 ps-1">Details</h6>
                        </li>
                        <li className="d-flex cursor-pointer">
                          <span className="bg-light p-1 px-2 ms-3">
                            <i
                              className=" text-zinc-500 fa fa-trash"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <h6 className="text-zinc-500 pt-2 ps-2">Delete</h6>
                        </li>
                        <li className="d-flex cursor-pointer border-top"  onClick={() => setModalRoleShow(true)}>
                          <span className=" text-zinc-500 ps-4 ">
                            <h6 className="text-zinc-500 pt-2 ps-1">
                              Change Roles
                            </h6>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Admission 1</td>
                  <td>australia1@theibex.in</td>
                  <td>2023-07-28</td>
                  <td>Yes</td>
                  <td>Australia</td>
                  <td>Admission</td>
                  <td>
                    <div class="dropdown">
                      <button
                        class="btn btn dropdown-toggle bgDrop"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        User
                      </button>
                      <ul class="dropdown-menu">
                        <li className="d-flex cursor-pointer"   onClick={() => setModalShow(true)}>
                          <span className="bg-light p-1 px-2 ms-3 ">
                            <i
                              className=" text-zinc-500 fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <h6 className="text-zinc-500 pt-1 ps-1">Edit</h6>
                        </li>
                        <li className="d-flex cursor-pointer" >
                          <span className=" text-zinc-500 p-1 px-2 ms-3">
                            <i class="fa fa-ban" aria-hidden="true"></i>
                          </span>
                          <h6 className="text-zinc-500 pt-1 ps-1">Ban</h6>
                        </li>
                        <li className="d-flex cursor-pointer"  onClick={() => setModalDetailsShow(true)}>
                          <span className="bg-light p-1 px-2 ms-3">
                            <i
                              className=" text-zinc-500 fa fa-list"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <h6 className="text-zinc-500 pt-1 ps-1">Details</h6>
                        </li>
                        <li className="d-flex cursor-pointer">
                          <span className="bg-light p-1 px-2 ms-3">
                            <i
                              className=" text-zinc-500 fa fa-trash"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <h6 className="text-zinc-500 pt-2 ps-2">Delete</h6>
                        </li>
                        <li className="d-flex cursor-pointer border-top"  onClick={() => setModalRoleShow(true)}>
                          <span className=" text-zinc-500 ps-4 ">
                            <h6 className="text-zinc-500 pt-2 ps-1">
                              Change Roles
                            </h6>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Admission 1</td>
                  <td>australia1@theibex.in</td>
                  <td>2023-07-28</td>
                  <td>Yes</td>
                  <td>Australia</td>
                  <td>Admission</td>
                  <td>
                    <div class="dropdown">
                      <button
                        class="btn btn dropdown-toggle bgDrop"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        User
                      </button>
                      <ul class="dropdown-menu">
                        <li className="d-flex cursor-pointer"   onClick={() => setModalShow(true)}>
                          <span className="bg-light p-1 px-2 ms-3 ">
                            <i
                              className=" text-zinc-500 fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <h6 className="text-zinc-500 pt-1 ps-1">Edit</h6>
                        </li>
                        <li className="d-flex cursor-pointer" >
                          <span className=" text-zinc-500 p-1 px-2 ms-3">
                            <i class="fa fa-ban" aria-hidden="true"></i>
                          </span>
                          <h6 className="text-zinc-500 pt-1 ps-1">Ban</h6>
                        </li>
                        <li className="d-flex cursor-pointer"  onClick={() => setModalDetailsShow(true)}>
                          <span className="bg-light p-1 px-2 ms-3">
                            <i
                              className=" text-zinc-500 fa fa-list"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <h6 className="text-zinc-500 pt-1 ps-1">Details</h6>
                        </li>
                        <li className="d-flex cursor-pointer">
                          <span className="bg-light p-1 px-2 ms-3">
                            <i
                              className=" text-zinc-500 fa fa-trash"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <h6 className="text-zinc-500 pt-2 ps-2">Delete</h6>
                        </li>
                        <li className="d-flex cursor-pointer border-top"  onClick={() => setModalRoleShow(true)}>
                          <span className=" text-zinc-500 ps-4 ">
                            <h6 className="text-zinc-500 pt-2 ps-1">
                              Change Roles
                            </h6>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
              <div>
                <UserEdit show={modalShow} onHide={() => setModalShow(false)} />
                <UserDetails
                  show={modalDetailsShow}
                  onHide={() => setModalDetailsShow(false)}
                />
                 <ChangeRole
                  show={modalRoleShow}
                  onHide={() => setModalRoleShow(false)}
                />
              </div>
            </Table>
          </div>
        </section>
      </main>
    </>
  );
};

export default UsersTable;
