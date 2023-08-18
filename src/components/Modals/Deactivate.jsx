import React from 'react';
import deactiveAccount from "../../assets/images/deactive_account.png";

const Deactivate = () => {
    return (
        <div>
               <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
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
              <img src={deactiveAccount} alt="Deactivate Account" />
              <h6 className="mt-4 mb-3">Deactivate Account!</h6>
              <p className="mb-5">
                Are you sure you want to <span>Deactivate</span> your Account?
              </p>
              <div className="modalBtn d-flex justify-content-center align-items-center gap-3 mb-5">
                <button className="cancelAccBtn" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button
                  className="confirmBtn"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Deactivate;