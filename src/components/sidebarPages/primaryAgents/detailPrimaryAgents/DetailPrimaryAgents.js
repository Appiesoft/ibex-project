import React from "react";
import { NavLink } from "react-router-dom";

const DetailPrimaryAgents = () => {
  return (
    <>
        <main className="main-container">
      <div class="card mt-4 mb-4 border-0">
        <div class="card-header d-flex justify-content-between align-items-center">
          Primary Agent Details
          <NavLink to="/edit-add-new-primary-agents"
            class="form-inline"
          >
           <h6 className=" bg-cyan-500 text-white bg-cyan-500 px-3 py-2 rounded-1"> Edit</h6>
          </NavLink>
        </div>
        <div class="row gutters-sm">
          <div class="col-md-4 mb-3 align-self-center ">
            <div class="card border-0">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Admin"
                    class="rounded-circle"
                    width="150"
                  />

                  <div class="mt-3">
                    <h4>atmc</h4>

                    <p class="text-secondary mb-1"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-8">
            <div class="card mb-3 border-0">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Primary Agent Name</h6>
                  </div>

                  <div class="col-sm-9 text-secondary">atmc</div>
                </div>

                <hr />

                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Primary Agent Email</h6>
                  </div>

                  <div class="col-sm-9 text-secondary">
                    applyfed@atmc.edu.au
                  </div>
                </div>

                <hr />

                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Primary Agent Phone Number</h6>
                  </div>

                  <div class="col-sm-9 text-secondary">9968873688</div>
                </div>

                <hr />

                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Primary Agent City</h6>
                  </div>

                  <div class="col-sm-9 text-secondary">delhi</div>
                </div>

                <hr />

                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Primary Agent Country</h6>
                  </div>

                  <div class="col-sm-9 text-secondary">australia</div>
                </div>

                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
    </>
  );
};

export default DetailPrimaryAgents;
