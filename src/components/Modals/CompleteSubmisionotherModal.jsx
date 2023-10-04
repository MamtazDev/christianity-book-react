import React from "react";
/* import deactiveSuccess from "../assets/images/deactive_success.png";
import close from "../assets/images/close.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"; */

const CompleteSubmisionotherModal = () => {
  return (
    <>
      <div
        class="modal fade"
        id="exampleModalToggle3"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalToggleLabel2">
                Modal 2
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Hide this modal and show the first with the button below.
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Back to first
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompleteSubmisionotherModal;
