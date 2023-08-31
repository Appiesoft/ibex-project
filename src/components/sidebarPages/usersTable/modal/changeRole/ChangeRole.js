import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ChangeRole = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Pick User Role
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
              label="user"
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
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={props.onHide}
            className="bg-slate-400 px-3 py-2 text-white rounded-1 text-sm"
          >
            Cancel
          </button>
          <button
            className="bg-cyan-500 px-3 py-2 text-white rounded-1 text-sm"
          >
            OK
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ChangeRole;
