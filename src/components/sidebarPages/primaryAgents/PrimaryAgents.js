import React, { useState } from "react";
import "./PrimaryAgents.css";
import { NavLink } from "react-router-dom";
import { Row, Table } from "react-bootstrap";
const PrimaryAgents = () => {
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
            to="/add-new-primary-agents"
          >
            <span className="p-2 bg-cyan-500 text-white rounded-1">
              <i className="fa fa-plus me-2"></i>
              New Primary Agent
            </span>
          </NavLink>
          <Row className=" mx-auto mt-lg-5 mt-3 ">
            <div className="col-sm-12 col-md-6 ps-0">
              <div className="mt-3 w-25 " id="users-list_length">
                <label className="d-flex align-baseline text-black">
                  Show
                  <select
                    name="users-list_length"
                    aria-controls="users-list"
                    className="custom-select custom-select-sm form-control form-control-sm mx-2"
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                  entries
                </label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 d-flex justify-content-lg-end justify-content-sm-start ps-0 mt-3 mt-lg-0 ">
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
          <div className="overflow-auto table_container ">
            <Table  striped bordered className="mt-3  table-sm ">
              <thead>
                <tr>
                  <th>Primary Agent Name</th>
                  <th>Primary Agent Email</th>
                  <th>Primary Agent Phone</th>
                  <th>Primary Agent City</th>
                  <th>Primary Agent Country</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Admission 1</td>
                  <td>australia1@theibex.in</td>
                  <td>1236547889</td>
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
                        UniXplore
                      </button>
                      <div class="dropdown-menu">
                        <div className="">
                          <h6 className="px-3 py-2 m-0 hover:bg-zinc-100 text-slate-500">
                            <NavLink to="/edit-add-new-primary-agents">
                              <span>
                                <i
                                  class="fa fa-edit me-2"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              Edit
                            </NavLink>
                          </h6>
                          <h6 className="px-3 py-2 m-0 hover:bg-zinc-100 text-slate-500">
                            <NavLink to="/details-primary-agents">
                              <span>
                                <i class="fa-solid fa-list me-2"></i>
                              </span>
                              Details
                            </NavLink>
                          </h6>
                          <h6 className="px-3 py-2 m-0 hover:bg-zinc-100 text-slate-500">
                            <span>
                              <i class="fa-solid fa-trash me-2"></i>
                            </span>
                            Delete
                          </h6>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </section>
      </main>
    </>
  );
};

export default PrimaryAgents;
