import React from "react";
import deactiveSuccess from "../../assets/images/deactive_success.png";
import close from "../../assets/images/close.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const SubscriptionForOthersModal = (props) => {
  const [secondModalShow, setSecondModalShow] = React.useState(false);

  const sendHandler = () => {
    setSecondModalShow(true);
  };
  const hideHandler = () => {
    props.onHide(false);
  };
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
            <Button onClick={hideHandler} className="close_button_subforother">
              <img src={close} alt="" />
            </Button>
          </Modal.Title>
        </Modal.Header>
        {secondModalShow ? (
          <Modal.Body className="modal_body_subforother">
            <img src={deactiveSuccess} alt="Deactivate Account" />
            <h4>Payment Successful!</h4>
            <p>
              You have successfully obtain subscription for{" "}
              <span
                className="text_clr_secondary fw-bold"
              >
                johnduo@gmail.com.
              </span>
            </p>
          </Modal.Body>
        ) : (
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
              <Button
                className="save_btn"
                data-bs-target="#exampleModalToggle3"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
                onClick={sendHandler}
              >
                Send
              </Button>
            </div>
          </Modal.Body>
        )}
      </Modal>
    </>
  );
};

export default SubscriptionForOthersModal;
