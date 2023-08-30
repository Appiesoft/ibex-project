import React from "react";
import { Modal, Form, Col } from "react-bootstrap";

const UserEdit = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable="yes"
      >
        <Modal.Header className="bg-slate-100 text-black" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Admission1
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Form>
            <Form.Group md="4" controlId="validationCustom01">
              <Form.Label className="mt-3 mb-2">Email</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Email"
                defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom01">
              <Form.Label className="mt-3 mb-2">Username</Form.Label>
              <Form.Control required type="text" placeholder="Username" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom01">
              <Form.Label className="mt-3 mb-2">Password</Form.Label>
              <Form.Control
                required
                type="Password"
                placeholder="Leave blank if you don't want to change it."
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom01">
              <Form.Label className="mt-3 mb-2">Repeat Password</Form.Label>
              <Form.Control
                required
                type="Password"
                placeholder="Leave blank if you don't want to change it."
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Label className="mt-3">
              <b>User Role:</b>
            </Form.Label>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Admin"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Admissions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Gte Team"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="File Lodgement"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Processing"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Reception"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Primary-Agent"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Sub-Agent"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Form.Label className="mt-3">
              <b>Represent Country:</b>
            </Form.Label>
            <Form.Group className="mb-3 d-flex">
              <Form.Check
                required
                label="Sub-Agent"
                feedback="You must agree before submitting."
                feedbackType="invalid"
                type="radio"
              />
              <Form.Check
                required
                type="radio"
                label="Sub-Agent"
                feedback="You must agree before submitting."
                feedbackType="invalid"
                className="mx-3"
              />
            </Form.Group>
            <Form.Label className="mt-3">
              <b>Login Ability:</b>
            </Form.Label>
            <Form.Group className="mb-3 d-flex">
              <Form.Check
                required
                label="Yes"
                feedback="You must agree before submitting."
                feedbackType="invalid"
                type="radio"
              />
              <Form.Check
                required
                type="radio"
                label="No"
                feedback="You must agree before submitting."
                feedbackType="invalid"
                className="mx-3"
              />
            </Form.Group>
            <Form.Group
              md="4"
              controlId="validationCustom01"
              className="border-top"
            >
              <Form.Label className="mt-3 mb-2">First Name</Form.Label>
              <Form.Control required type="text" placeholder="firstname" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom01">
              <Form.Label className="mt-3 mb-2">Last Name</Form.Label>
              <Form.Control required type="text" placeholder="lastname" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom01">
              <Form.Label className="mt-3 mb-2">City</Form.Label>
              <Form.Control required type="text" placeholder="city" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom01">
              <Form.Label className="mt-3 mb-2">Address</Form.Label>
              <Form.Control required type="text" placeholder="address" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom01">
              <Form.Label className="mt-3 mb-2">Phone</Form.Label>
              <Form.Control required type="text" placeholder="phone" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-slate-200 px-3 py-2 rounded"
            onClick={props.onHide}
          >
            Cancel
          </button>
          <button className="p-2 bg-cyan-500 text-white  px-3 py-2  rounded-1">
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserEdit;
