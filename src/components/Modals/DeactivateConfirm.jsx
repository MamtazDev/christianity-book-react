import React from "react";
import deactiveSuccess from "../../assets/images/deactive_success.png";

const DeactivateConfirm = () => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body deactiveAccModalOne text-center">
              <img src={deactiveSuccess} alt="Deactivate Account" />
              <h6 className="mt-4 mb-3 text-dark">Deactivate Account!</h6>
              <p className="mb-5">
                Your Account has been Deactivated, You are no longer exist on
                Christianity Book’s Data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeactivateConfirm;
