import React, { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import "./AddNewStudent.css";

import { Button, Card, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const AddNewStudent = () => {
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
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [formValidation, setFormValidation] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    passportNumber: "",
    university: "",
    primaryAgent: "",
    subAgent: "",
    processingUser: "",

    // Other form fields...
  });
  const requiredFields = [
    "firstName",
    "lastName",
    "dob",
    "passportNumber",
    "university",
    "primaryAgent",
    "subAgent",
    "processingUser",
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
      validateForm(); // Validate the form before proceeding
      if (!formValidation) {
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
        <div className="flex pt-5 justify-content-center">
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
              <Form className="d-flex">
                <div class="col-sm-12 col-md-9 col-lg-9 col-xl-9 prof-lft">
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
                                      <Form.Group className="d-flex">
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
                                      <Form.Group className="d-flex">
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
                                      <Form.Group className="d-flex">
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
                                    <p>
                                      <Form.Group className="d-flex">
                                        <Form.Label>
                                          Passport Number:
                                        </Form.Label>
                                        <Form.Control
                                          required
                                          name="passportNumber"
                                          type="number"
                                          placeholder=" "
                                          value={formData.passportNumber}
                                          onChange={handleInputChange}
                                        />
                                      </Form.Group>
                                    </p>
                                  </div>
                                  <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 name-rgt position-relative">
                                    <p>
                                      <Form.Group className="d-flex">
                                        <Form.Label>University</Form.Label>
                                        <Form.Select
                                          name="university"
                                          defaultValue="Choose..."
                                          value={formData.university}
                                          onChange={handleInputChange}
                                        >
                                          <option hidden>Choose...</option>
                                          <option value="1">Swinburne</option>
                                          <option value="2">Swinburne</option>
                                        </Form.Select>
                                      </Form.Group>
                                    </p>
                                    <p>
                                      <Form.Group className="d-flex">
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
                                          <option value="1">Swinburne</option>
                                          <option value="2">Swinburne</option>
                                        </Form.Select>
                                      </Form.Group>
                                    </p>
                                    <p>
                                      <Form.Group className="d-flex">
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
                                          <option value="1">Swinburne</option>
                                          <option value="2">Swinburne</option>
                                        </Form.Select>
                                      </Form.Group>
                                    </p>
                                  </div>
                                </Row>
                              </div>
                              <div class="card-header">
                                <h4 className="py-2">Assign Processing Team</h4>
                              </div>
                              <div class="card-body">
                                <div class="row">
                                  <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 name-lft">
                                    <p>
                                      <Form.Group className="d-flex justify-content-lg-around">
                                        <Form.Label className="w-25">
                                          Select Processing User:
                                        </Form.Label>
                                        <Form.Select
                                          name="processingUser"
                                          defaultValue="Choose..."
                                          value={formData.processingUser}
                                          onChange={handleInputChange}
                                          className="w-75"
                                        >
                                          <option hidden>Choose...</option>
                                          <option value="1">Swinburne</option>
                                          <option value="2">Swinburne</option>
                                        </Form.Select>
                                      </Form.Group>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Row className="my-3 me-2">
                          <Col className="d-flex justify-content-end">
                            <button className="p-2 bg-cyan-500 text-white rounded-1 text-lg font-bold px-3">
                              Save
                            </button>
                            <button className="p-2 bg-cyan-500 text-white rounded-1 text-lg ms-2 font-bold">
                              {`Step ${currentStep} `}
                              {currentStep === steps.length
                                ? "Finish"
                                : "Admission is in Process"}
                            </button>
                          </Col>
                        </Row>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 prof-rgt">
                  <div class="color-div2">
                    <h2>Notes</h2>
                    <div class="col-md-12">
                      <div id="notes_list">errors</div>
                    </div>
                    <p>
                      <label>Add Note</label>
                    </p>

                    <div
                      class="note_area_editable"
                      contentEditable="true"
                    ></div>
                    <p>
                      <Form.Group>
                        <Form.Label>Choose File</Form.Label>
                        <Form.Control required type="file" />
                      </Form.Group>
                      <br />
                    </p>
                    <p>
                      <Button
                        variant="secondary"
                        className="btn bg-secondary"
                        onClick={handleNextClick}
                      >
                        {currentStep === steps.length ? "Finish" : "Next"}
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

export default AddNewStudent;
