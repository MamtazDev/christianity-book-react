import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PK } from '../../config/confir';
import React from 'react';
import { Modal } from 'react-bootstrap';
import NewPayment from '../Payment/NewPayment';

const SubscriptionModal = ({handleAskForHardCopy,setModalShow,...props}) => {
    const stripePromise = loadStripe(STRIPE_PK);
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
      
         <h3 className='mb-3 text-center '>Shiping cost - $20</h3>
         
        <Elements stripe={stripePromise}>
         <NewPayment setModalShow={setModalShow}handleAskForHardCopy={handleAskForHardCopy}/>
        </Elements>
      
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
};

export default SubscriptionModal;