import React from "react";
import deactiveSuccess from "../../assets/images/deactive_success.png";
import close from "../../assets/images/close.png";
const CompletePayment = () => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <div
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <img src={close} alt="" />
                </span>
              </div>
            </div>
            <div className="modal-body deactiveAccModalOne text-center payment_modal_text">
              <img src={deactiveSuccess} alt="Deactivate Account" />
              <h6 className="mt-4 mb-3 text-dark">Payment Successful!</h6>
              <p
                className="mb-5 "
                style={{ marginLeft: "79px", marginRight: "79px" }}
              >
                Your subscription has been successfully activated, granting you
                access to read the book online with voice translation and
                participate in the Q&A forum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompletePayment;
