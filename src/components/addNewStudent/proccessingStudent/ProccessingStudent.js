import React, { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import "./ProccessingStudent.css";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import user from "../../../Images/user.jpg";
import { submitStudentForm } from "../../../redux/studentForm/actionStudentForm";

const ProccessingStudent = () => {
  const naviagte = useNavigate();
  const dispatch = useDispatch();

  const steps = [
    "Addmissions",
    "Processing",
    "OL Applied",
    "GTE",
    "Upload Fees & all",
    "COE",
    "File lodgement & all",
    "Result",
  ];
  const [currentStep, setCurrentStep] = useState(2);
  const [complete, setComplete] = useState(false);
  const [formValidation, setFormValidation] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    dob: "",
    lastQualification: "",
    university: "",
    primaryAgent: "",
    subAgent: "",
    fundsAvailable: "",
    itelsPte: "",
    itelsUsername: "",
    itelsPassword: "",
    categoryUser: "",
    nameOfFile: "",
    fileOthers:"",
    noteFiles:""
    // Other form fields...
  });
  const requiredFields = [
    "firstName",
    "lastName",
    "number",
    "dob",
    "lastQualification",
    "university",
    "primaryAgent",
    "subAgent",
    "fundsAvailable",
    "itelsPte",
    "itelsUsername",
    "itelsPassword",
    "categoryUser",
    "nameOfFile",
    "fileOthers",
    "noteFiles"
  ];

  const validateForm = () => {
    const isFormValid = requiredFields.every(
      (field) => formData[field].trim() !== ""
    );
    setFormValidation(isFormValid);
  };

  useEffect(() => {
    const requiredFieldsFilled = requiredFields.every(
      (field) => formData[field].trim() !== ""
    );
    setIsFormFilled(requiredFieldsFilled);
  }, [formData]);

  useEffect(() => {
    if (formValidation) {
      // Proceed to the next step here
      setCurrentStep((prev) => prev + 1);
    }
  }, [formValidation]);

  const handleNextClick = () => {
    if (currentStep === steps.length) {
      return window.confirm("are you want to submit");
    } else {
      validateForm();
      if (formValidation) {
        // Dispatch the API call action
        dispatch(submitStudentForm(formData));
        console.log(formData)
        naviagte("/");
      } // Validate the form before proceeding
      else {
        alert("Please fill all required fields before proceeding.");
      }
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <main className="main-container">
        <div className="flex pt-5 justify-content-center bubblebar">
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`step-item relative flex flex-col justify-center items-center w-36 ${
                currentStep === i + 1 && "active"
              } ${(i + 1 < currentStep || complete) && "complete"} `}
            >
              <div className="step">
                {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
              </div>
              <p className="text-gray-500">{step}</p>
            </div>
          ))}
        </div>
        {!complete && (
          <div class="sav-mainbody m-3">
            <Row>
              <Form className="d-flex flex-wrap">
                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-8 prof-lft ">
                  <div class="color-div ">
                    <div class="row">
                      <fieldset>
                        <div class="form-card px-2 py-3">
                          <div class="row">
                            <div class="col-7">
                              <h3 class="asses-hdg">Admissions</h3>
                              <br />
                            </div>
                            <div class="col-5">
                              <h2 class="steps">Step 1 - 8</h2>
                            </div>
                          </div>
                          <div id="accordion">
                            <div class="card border-0">
                              <div class="card-header py-2">
                                <h4
                                  class="card-link"
                                  data-toggle="collapse"
                                  href="#collapseZero"
                                >
                                  Student Details
                                </h4>
                              </div>

                              <div class="card-body">
                                <Row>
                                  <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 name-lft">
                                    <p>
                                      <img src={user} alt="" />
                                      <br />
                                      <Form.Group>
                                        <Form.Label>Choose File</Form.Label>
                                        <Form.Control required type="file" name="profile"  value={formData.profile}
                                          onChange={handleInputChange}/>
                                      </Form.Group>
                                      <br />
                                    </p>
                                    <p>
                                      <Form.Group className="name-left-two">
                                        <Form.Label>First Name :</Form.Label>
                                        <Form.Control
                                          required
                                          className="outline-none"
                                          name="firstName"
                                          placeholder="First Name"
                                          value={formData.firstName}
                                          onChange={handleInputChange}
                                        />
                                      </Form.Group>
                                    </p>

                                    <p>
                                      <Form.Group className="name-left-two">
                                        <Form.Label>Last Name :</Form.Label>
                                        <Form.Control
                                          required
                                          name="lastName"
                                          placeholder="Last Name"
                                          value={formData.lastName}
                                          onChange={handleInputChange}
                                        />
                                      </Form.Group>
                                    </p>
                                    <p>
                                      <Form.Group className="name-left-two">
                                        <Form.Label>Email :</Form.Label>
                                        <Form.Control
                                          required
                                          name="email"
                                          placeholder="example@.com"
                                          value={formData.email}
                                          onChange={handleInputChange}
                                        />
                                      </Form.Group>
                                    </p>
                                    <p>
                                      <Form.Group className="name-left-two">
                                        <Form.Label>
                                          Contact Number :
                                        </Form.Label>
                                        <Form.Control
                                          required
                                          name="number"
                                          placeholder="number"
                                          value={formData.number}
                                          onChange={handleInputChange}
                                        />
                                      </Form.Group>
                                    </p>

                                    <p>
                                      <Form.Group className="name-left-two">
                                        <Form.Label>Date Of Birth :</Form.Label>
                                        <Form.Control
                                          required
                                          name="dob"
                                          type="date"
                                          value={formData.dob}
                                          onChange={handleInputChange}
                                        />
                                      </Form.Group>
                                    </p>
                                  </div>
                                  <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 name-rgt position-relative">
                                    <p>
                                      <Form.Group className="name-left-two">
                                        <Form.Label>
                                          Last Qualification :
                                        </Form.Label>
                                        <Form.Control
                                          required
                                          name="lastQualification"
                                          type="text"
                                          placeholder="Last Qualification "
                                          value={formData.lastQualification}
                                          onChange={handleInputChange}
                                        />
                                      </Form.Group>
                                    </p>
                                    <p>
                                      <Form.Group className="name-left-two">
                                        <Form.Label>University</Form.Label>
                                        <Form.Select
                                          name="university"
                                          defaultValue="Choose..."
                                          value={formData.university}
                                          onChange={handleInputChange}
                                        >
                                          <option hidden value="">
                                            --choose--
                                          </option>
                                          <option value="Swinburne">
                                            Swinburne
                                          </option>
                                          <option value="University_of_Notre_Dame">
                                            University of Notre Dame
                                          </option>

                                          <option
                                            selected=""
                                            value="University_of_Tasmania"
                                          >
                                            University of Tasmania
                                          </option>

                                          <option value="University_Of_Wollongong">
                                            University Of Wollongong
                                          </option>

                                          <option value="Victoria">
                                            Victoria{" "}
                                          </option>

                                          <option value="Victoria_Melbourne">
                                            Victoria Melbourne
                                          </option>
                                        </Form.Select>
                                      </Form.Group>
                                    </p>
                                    <p>
                                      <Form.Group className="name-left-two">
                                        <Form.Label>
                                          Primary Agent Name :
                                        </Form.Label>
                                        <Form.Select
                                          name="primaryAgent"
                                          defaultValue="Choose..."
                                          value={formData.primaryAgent}
                                          onChange={handleInputChange}
                                        >
                                          <option hidden>Choose...</option>
                                          <option value="primary_Agent">
                                            Primary Agent
                                          </option>
                                        </Form.Select>
                                      </Form.Group>
                                    </p>
                                    <p>
                                      <Form.Group className="name-left-two">
                                        <Form.Label>
                                          Sub Agent Name :
                                        </Form.Label>
                                        <Form.Select
                                          name="subAgent"
                                          defaultValue="Choose..."
                                          value={formData.subAgent}
                                          onChange={handleInputChange}
                                        >
                                          <option hidden>Choose...</option>
                                          <option value="sub_Agent">
                                            subAgent
                                          </option>
                                        </Form.Select>
                                      </Form.Group>
                                    </p>
                                    <p class="rad-cls d-flex">
                                      <label>Funds Available:</label>
                                      <span class="row ">
                                        <em class="col-auto">
                                          <input
                                            type="radio"
                                            class="mx-2"
                                            name="fundsAvailable"
                                            value="yes"
                                          
                                          />
                                          <label for="html">Yes</label>
                                        </em>
                                        <em class="col-auto">
                                          <input
                                            type="radio"
                                            class="mx-2"
                                            name="type"
                                            value="no"
                                          />
                                          <label for="css">No</label>
                                        </em>
                                        <em class="col-auto">
                                          <input
                                            type="radio"
                                            class="mx-2"
                                            name="type"
                                            value="other"
                                          />
                                          <label for="css">other</label>
                                        </em>
                                        <input
                                          style={{ display: "none" }}
                                          type="text"
                                          class="step1_op_ins"
                                          id="custombox"
                                          value=""
                                        />
                                      </span>
                                    </p>
                                  </div>
                                </Row>
                              </div>
                              <div class="card-header">
                                <h4 className="py-2 ps-2">
                                  IELTS | PTE Login Details
                                </h4>

                                <div class="card-body border-0">
                                  <div class="row border-0">
                                    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 name-lft">
                                      <p class="rad-cls d-flex border-bottom-0 py-0">
                                        <span class="row ">
                                          <em class="col-auto">
                                            <input
                                              type="radio"
                                              class="mx-2"
                                              name="type"
                                              value="yes"
                                              
                                            />
                                            <label for="html">IELTS</label>
                                          </em>
                                          <em class="col-auto">
                                            <input
                                              type="radio"
                                              class="mx-2"
                                              name="type"
                                              value="no"
                                            />
                                            <label for="css">PTE</label>
                                          </em>
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="card-body  border-0">
                                <div class="row">
                                  <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                    <p>
                                      <Form.Group className="">
                                        <Form.Label className="">
                                          IELTS Username :
                                        </Form.Label>
                                        <Form.Control
                                          required
                                          className="outline-none"
                                          name="iletsName"
                                          placeholder="Name of File"
                                          value={formData.iletsName}
                                          onChange={handleInputChange}
                                        />
                                      </Form.Group>
                                    </p>
                                  </div>
                                  <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                    <p>
                                      <Form.Group className="">
                                        <Form.Label className="">
                                          IELTS Password:
                                        </Form.Label>
                                        <Form.Control
                                          required
                                          type="password"
                                          className="outline-none"
                                          name="iletsPassword"
                                          placeholder="Name of File"
                                          value={formData.iletsPassword}
                                          onChange={handleInputChange}
                                        />
                                      </Form.Group>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="card-header">
                                <h4 className="py-2 ps-2">Upload Documents</h4>
                              </div>
                              <div class="card-body">
                                <div class="row">
                                  <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 name-lft">
                                    <p>
                                      <Form.Group className="">
                                        <Form.Label className="form-label-Processing">
                                          Select Category :
                                        </Form.Label>
                                        <Form.Select
                                          name="categoryUser"
                                          defaultValue="Choose..."
                                          value={formData.categoryUser}
                                          onChange={handleInputChange}
                                        >
                                          <option hidden>Choose...</option>
                                          <option value="Academic">
                                            Academic
                                          </option>

                                          <option value="English">
                                            English
                                          </option>

                                          <option value="Experience">
                                            Experience
                                          </option>

                                          <option value="LOR">LOR</option>

                                          <option value="Passport">
                                            Passport
                                          </option>

                                          <option value="Spouse Docs">
                                            Spouse Docs
                                          </option>

                                          <option value="SOP">SOP</option>
                                        </Form.Select>
                                      </Form.Group>
                                    </p>
                                    <p>
                                      <Form.Group className="">
                                        <Form.Label className="form-label-Processing">
                                          Name of File :
                                        </Form.Label>
                                        <Form.Control
                                          required
                                          className="outline-none"
                                          name="nameOfFile"
                                          placeholder="Name of File"
                                          value={formData.nameOfFile}
                                          onChange={handleInputChange}
                                        />
                                      </Form.Group>
                                    </p>
                                    <p>
                                      <Form.Group>
                                        <Form.Label>Choose File</Form.Label>
                                        <Form.Control required type="file" name="fileOthers"   value={formData.fileOthers}
                                          onChange={handleInputChange} />
                                      </Form.Group>
                                      <br />
                                      <Row className=" me-2 ">
                                        <Col className="d-lg-flex justify-content-lg-start justify-content-start ms-3">
                                          <button className="p-2 bg-cyan-500 text-white rounded-1 text-lg text-sm font-bold px-3">
                                            Upload
                                          </button>
                                        </Col>
                                      </Row>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Row className="my-3 me-2 ms-2 ms-lg-0">
                          <Col className="d-lg-flex justify-content-lg-end justify-content-start">
                            <NavLink to="/add-new-student">
                              <button className="p-2 bg-zinc-500 text-white rounded-1 text-lg text-sm font-bold px-3">
                                Previous
                              </button>
                            </NavLink>
                            <button className="p-2 bg-cyan-500 text-white rounded-1 text-lg ms-lg-2 ms-md-3 ms-0 mt-3 mt-lg-0  text-sm font-bold">
                              Save
                            </button>

                            <button className="p-2 bg-cyan-500 text-white rounded-1 text-lg ms-lg-2 ms-md-3 ms-0 mt-3 mt-lg-0  text-sm font-bold">
                              Revert to Admission
                            </button>
                            <button className="p-2 bg-cyan-500 text-white rounded-1 text-lg ms-lg-2 ms-md-3 ms-0 mt-3 mt-lg-0  text-sm font-bold">
                              Proceed to Next Step :Ol Apply
                            </button>
                          </Col>
                        </Row>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4 prof-rgt">
                  <div class="color-div2">
                    <h2>Notes</h2>
                    <div class="col-md-12 ">
                      <div className="text-black">
                        Student age is less than 18.
                      </div>
                      <p className="text-black">
                        <div className="text-black">Attachment:</div>
                        <div className="d-flex text-cyan-500 py-2">
                          <span className="border p-2">
                            <i class="fa fa-eye" aria-hidden="true"></i>
                          </span>
                          <span className="border p-2 mx-3">
                            <i class="fa fa-download " aria-hidden="true"></i>
                          </span>
                          <span className="border p-2">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </span>
                        </div>
                      </p>
                      <div className="d-flex text-black justify-content-center ">
                        <strong className="pe-2">--admin</strong>
                        <em>at 2023-09-01 05:00:15am</em>
                      </div>
                    </div>
                    <p>
                      <label>Add Notes</label>
                    </p>

                    <div
                      class="note_area_editable"
                      contentEditable="true"
                    ></div>
                    <p>
                      <Form.Group>
                        <Form.Label>Choose File</Form.Label>
                        <Form.Control required type="file" name="noteFiles"  value={formData.noteFiles}
                                          onChange={handleInputChange}/>
                      </Form.Group>
                      <br />
                    </p>
                    <p>
                      <Button
                        className="btn bg-cyan-500 border-0"
                        onClick={handleNextClick}
                      >
                        {currentStep === steps.length ? "Finish" : "Submit"}
                      </Button>
                    </p>
                  </div>
                </div>
              </Form>
            </Row>
          </div>
        )}
      </main>
    </>
  );
};

export default ProccessingStudent;
