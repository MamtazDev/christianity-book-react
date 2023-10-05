import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CompleteSubmisionotherModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter1"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <Button className="close_button_subforother">
              <img src={close} alt="" />
            </Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal_body_subforother">
          <h4>Subscribe for Others!</h4>
          <p>
            Please provide the user's email so they can access the web at no
            cost.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CompleteSubmisionotherModal;
