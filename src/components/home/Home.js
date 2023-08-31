import React, { useState } from "react";
import user from "../../Images/user.jpg";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { TiTick } from "react-icons/ti";

import Footer from "../footer/Footer";
function Home() {
  const steps = [
    "Addmissios",
    "Processing",
    "OL Applied",
    "GTE",
    "Upload Fees & all",
    "COE",
    "File lodgement  & all",
    "Result",
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main className="main-container">
      <div class="col-md-12 col-lg-12 col-xl-12 mt-3 mx-auto">
        <div class="top_btns">
          <NavLink
            class="d-block d-sm-inline-block add_new_btn"
            to="/add-new-student"
          >
            <button className="p-2 bg-cyan-500 text-white rounded-1">
              <i class="fa fa-plus me-2"></i>
              Add New Student
            </button>
          </NavLink>
          <button className="p-2 bg-cyan-500 text-white rounded-1">
            Filters
          </button>
        </div>
        {/* filter buttne here pending */}
        <div className="row mx-auto">
          <div class="col-md-12 sav_newfilter pt-3 d-flex flex-wrap ps-0">
            <NavLink to="" class="d-block d-sm-inline-block">
              <button className="p-2 bg-cyan-500 text-white rounded-1 text-sm">
                Add Students (+16)
              </button>
            </NavLink>

            <NavLink class="d-block d-sm-inline-block">
              <button className="p-2 bg-cyan-500 text-white rounded-1 text-sm">
                Pending Admission Users (4)
              </button>
            </NavLink>
            <NavLink class="d-block d-sm-inline-block">
              <button className="p-2 bg-cyan-500 text-white rounded-1 text-sm">
                Flagged To Processing (4)
              </button>
            </NavLink>
            <NavLink class="d-block d-sm-inline-block">
              <button className="p-2 bg-cyan-500 text-white rounded-1 text-sm">
                Rejected By GTE (0)
              </button>
            </NavLink>
            <NavLink class="d-block d-sm-inline-block">
              <button className="p-2 bg-cyan-500 text-white rounded-1 text-sm">
                Flagged To GTE (0)
              </button>
            </NavLink>
            <NavLink class="d-block d-sm-inline-block">
              <button className="p-2 bg-cyan-500 text-white rounded-1 text-sm">
                Processing (6)
              </button>
            </NavLink>
            <NavLink class="d-block d-sm-inline-block">
              <button className="p-2 bg-cyan-500 text-white rounded-1 text-sm">
                GTE (0)
              </button>
            </NavLink>
            <NavLink class="d-block d-sm-inline-block">
              <button className="p-2 bg-cyan-500 text-white rounded-1 text-sm">
                Lodgement (0)
              </button>
            </NavLink>
            <NavLink class="d-block d-sm-inline-block">
              <button className="p-2 bg-cyan-500 text-white rounded-1 text-sm">
                Flagged to Lodgement (0)
              </button>
            </NavLink>
            <NavLink class="d-block d-sm-inline-block">
              <button className="p-2 bg-cyan-500 text-white rounded-1 text-sm">
                Visa Approved (0)
              </button>
            </NavLink>
            <NavLink class="d-block d-sm-inline-block">
              <button className="p-2 bg-cyan-500 text-white rounded-1 text-sm">
                Visa Rejected (0)
              </button>
            </NavLink>
            <NavLink class="d-block d-sm-inline-block">
              <button className="p-2 bg-cyan-500 text-white rounded-1 text-sm">
                Visa Pending (0)
              </button>
            </NavLink>
            <div className="rounded-pill border-black  d-flex border searchField">
              <i
                class="fa fa-search py-3 ps-3 text-black"
                aria-hidden="true"
              ></i>
              <input
                type="text"
                placeholder="Search ..."
                class="w-full  bg-gray-100 bg-opacity-50 rounded-pill focus:ring-gray-100 focus:bg-transparent  focus:border-gray-300 text-base outline-none text-gray-700   px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          
        </div>
      </div>
      <div class="mt-5">
        <div class="whole_box user-row py-2">
          <div class="left2_div">
            <img src={user} className="mx-auto" alt="profile" />
            <h4>Ibex-0557</h4>
            <h4>Student age is less than 18 </h4>
          </div>
          <div class="left3_div">
            <div class="top_sav">
              <div class="sav_txt1">
                <span>Enr ID</span>
                <h6>Ibex-0557</h6>
              </div>
              <div class="sav_txt1">
                <span>Full Name</span>
                <h6>shah rukh khan</h6>
              </div>
              <div class="sav_txt1">
                <span>Father Namer</span>
                <h6>Abdula khann sheikh</h6>
              </div>
              <div class="sav_txt1">
                <span>Status</span>
                <h6>Flagged To Processing</h6>
              </div>
              <div class="sav_txt1">
                <span>GTE</span>
                <h6>12434</h6>
              </div>
              <div class="sav_txt1">
                <span>University</span>
                <h6>Notre Dame</h6>
              </div>
              <div class="sav_txt1">
                <span>Primary Agent Name </span>
                <h6>Primary A</h6>
              </div>
              <div class="sav_txt1">
                <span>Sub Agent Name </span>
                <h6>Agent To Name</h6>
              </div>
            </div>
            <div className="flex justify-content-evenly">
              {steps?.map((step, i) => (
                <div
                  key={i}
                  className={`step-item relative flex flex-col  justify-center items-center w-36 ${
                    currentStep === i + 1 && "active"
                  } ${(i + 1 < currentStep || complete) && "complete"} `}
                >
                  <div className="step">
                    {i + 1 < currentStep || complete ? (
                      <TiTick size={24} />
                    ) : (
                      i + 1
                    )}
                  </div>
                  <p className="text-gray-500 ">{step}</p>
                </div>
              ))}
            </div>
            {!complete && (
              <button
                className="btn"
                onClick={() => {
                  currentStep === steps.length
                    ? setComplete(true)
                    : setCurrentStep((prev) => prev + 1);
                }}
              >
                {currentStep === steps.length ? "Finish" : "Next"} ,
                {currentStep}
              </button>
            )}
          </div>

          <div class="left_div">
            <div class="btn-group">
              <i class="fa fa-user-secret text-cyan-500 me-4 pt-2 text-xl"></i>
              <span
                onClick={toggleDropdown}
                className={` ${
                  !isOpen
                    ? "boxinactive pe-2 pt-2  bg-cyan-500 rounded-1"
                    : "boxactive pe-2  pt-2 bg-cyan-500 rounded-1"
                }`}
              >
                <i
                  className={` ${
                    !isOpen
                      ? "fa-sharp fa-solid fa-caret-down ms-2"
                      : "fa-sharp fa-solid fa-caret-up ms-2"
                  }`}
                ></i>
              </span>
              {isOpen && (
                <div className="position-absolute  m-3 profileBtn border">
                  <h6 className="px-3 py-2 m-0 hover:bg-zinc-100">
                    <NavLink to="/my-profile">
                      <span>
                        <i class="fa fa-edit me-2" aria-hidden="true"></i>
                      </span>
                      Edit
                    </NavLink>
                  </h6>
                  <h6 className="px-3 py-2 m-0 hover:bg-zinc-100">
                    <NavLink to="/login">
                      <span>
                        <i class="fa-solid fa-list me-2"></i>
                      </span>
                      Details
                    </NavLink>
                  </h6>

                  <h6 className="px-3 py-2 m-0 hover:bg-zinc-100">
                    <NavLink to="/login">
                      <span>
                        <i class="fa-solid fa-trash me-2"></i>
                      </span>
                      Delete
                    </NavLink>
                  </h6>
                </div>
              )}
            </div>
          </div>
        
        </div>
      
      </div>
      <Footer/>
    </main>
    
  );
}

export default Home;
