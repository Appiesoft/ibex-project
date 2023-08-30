import React from "react";
import { Button, Modal } from "react-bootstrap";

const UserDetails = (props) => {
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
            Admission 1
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <dl class="dl-horizontal">
            <dt title="Email">Email:</dt>
            <dd id="modal-details--email">australia1@theibex.in</dd>

            <dt title="First Name">First Name:</dt>
            <dd id="modal-details--first-name">isha</dd>
            <dt title="Last Name">Last Name:</dt>
            <dd id="modal-details--last-name">Arora</dd>

            <dt title="login_ability_details">Login Ability:</dt>
            <dd id="modal-details--login_ability">Yes </dd>
            <dt title="City">City:</dt>
            <dd id="modal-details--city">Karnal </dd>

            <dt title="Address">Address:</dt>
            <dd id="modal-details--address">Village Nanhera</dd>
            <dt title="Phone">Phone:</dt>
            <dd id="modal-details--phone">8989898989</dd>
            <dt title="Last Login">Last Login:</dt>
            <dd id="modal-details--last-login">2023-08-04 06:22:47</dd>
            <dt title="Roles">Roles:</dt>
            <dd id="modal-details--uroles">
              user
              <br />{" "}
            </dd>

            <dt title="Country">Country:</dt>
            <dd id="modal-details--country">
              Australia
              <br />{" "}
            </dd>
          </dl>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={props.onHide}
            className="bg-cyan-500 px-3 py-2 text-white rounded-1"
          >
            OK
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserDetails;
