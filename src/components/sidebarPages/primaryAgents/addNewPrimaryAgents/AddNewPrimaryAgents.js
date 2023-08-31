import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

const AddNewPrimaryAgents = () => {
  return (
    <main className="main-container">
      <Card className="border-0">
        <Card.Body>
          <Form.Label className="py-2">
            <h5 className="text-cyan-500">ADD NEW PRIMARY AGENTS</h5>
          </Form.Label>
          <Form className="border-top mb-3">
            <Row className="pt-3">
              <Col lg={6}>
                <Row>
                  <Form.Group className="d-flex justi ">
                    <div class="col-sm-4">
                      <Form.Label>Primary Agent Name</Form.Label>{" "}
                    </div>
                    <div class="col-sm-8">
                      <Form.Control
                        required
                        className="outline-none"
                        name="name"
                        placeholder="Name"
                      />
                    </div>
                  </Form.Group>
                </Row>
                <Row className="py-3">
                  <Form.Group className="d-flex justi ">
                    <div class="col-sm-4">
                      <Form.Label>Primary Agent Email</Form.Label>{" "}
                    </div>
                    <div class="col-sm-8">
                      <Form.Control
                        required
                        className="outline-none"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="d-flex justi ">
                    <div class="col-sm-4">
                      <Form.Label>Primary Agent Phone</Form.Label>{" "}
                    </div>
                    <div class="col-sm-8">
                      <Form.Control
                        required
                        className="outline-none"
                        name="phone"
                        placeholder="2165496746"
                      />
                    </div>
                  </Form.Group>
                </Row>
              </Col>
              <Col lg={6}>
                <Row>
                  <Form.Group className="d-flex justi ">
                    <div class="col-sm-4">
                      <Form.Label>Primary Agent City</Form.Label>{" "}
                    </div>
                    <div class="col-sm-8">
                      <Form.Control
                        required
                        className="outline-none"
                        name="city"
                        placeholder="city"
                      />
                    </div>
                  </Form.Group>
                </Row>
                <Row className="py-3">
                  <Form.Group className="d-flex justi ">
                    <div class="col-sm-4">
                      <Form.Label>Primary Agent Country</Form.Label>{" "}
                    </div>
                    <div class="col-sm-8">
                      <Form.Select name="university" defaultValue="Choose...">
                        <option hidden>--Select Country--</option>
                        <option value="1">Swinburne</option>
                        <option value="2">Swinburne</option>
                      </Form.Select>
                    </div>
                  </Form.Group>
                </Row>
              </Col>
            </Row>
            <Row className="my-3 me-2 border-top">
              <Col className="d-flex justify-content-start pt-3">
                <button className="p-2 bg-zinc-600 text-white rounded-1 text-sm  px-3">
                  Cancel
                </button>
                <button className="p-2 bg-cyan-500 text-white rounded-1 text-sm ms-2 ">
                  Save
                </button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </main>
  );
};

export default AddNewPrimaryAgents;
