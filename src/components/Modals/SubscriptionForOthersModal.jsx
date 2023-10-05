import React from "react";
import deactiveSuccess from "../../assets/images/deactive_success.png";
import close from "../../assets/images/close.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import "./Subscription.css";
import CompleteSubmisionotherModal from "./CompleteSubmisionotherModal";
const SubscriptionForOthersModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <Button onClick={props.onHide} className="close_button_subforother">
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
          <div>
            <input
              type="text"
              className="email_sub_input "
              placeholder="Enter promo code"
             
            />
            <button
              className="save_btn"
              data-bs-target="#exampleModalToggle3"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
            >
              Send
            </button>
            <CompleteSubmisionotherModal/>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SubscriptionForOthersModal;
