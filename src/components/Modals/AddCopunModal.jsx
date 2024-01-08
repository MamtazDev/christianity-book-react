import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { createCoupon } from '../../api/coupon';
import Swal from 'sweetalert2';

const AddCopunModal = ({getAllCoupons,allBooks,setModalShow,...props}) => {

    const [isActive,setIsactive]=useState(false)
    const [loading,setLoading]=useState(false)

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setLoading(true);
        const form = e.target;

        const book = form.book.value;
        const  code = form.code.value;
        const discount = Number((form.discount.value / 100).toFixed(2));
        const status = isActive;

        const data = {
            book,
            code,
            discount,
            status
        }
try {
    
const response = await createCoupon(data)
if (response) {
    getAllCoupons()
    setLoading(false);
    setModalShow(false)
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Coupon created successful!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
} catch (error) {
    setLoading(false);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Something went wrong!",
        showConfirmButton: false,
        timer: 1500,
      });
}
finally{
    setLoading(false);
}

    }
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
       <form className='p-3 ' onSubmit={handleSubmit}>
       <h4 className='mb-3 text-center '>Add Coupon</h4>
       <div className="d-flex flex-column gap-3  mb-5">
       <div className="modalInputContainer ">
            <label>Book</label>
            <select name="book" className="form-control" >
              <option  disabled selected>
                Select Book
              </option>
              {allBooks?.map((item, idx) => (
                <option value={item._id} key={idx}>{item.title}</option>
              ))}
            </select>
          </div>
          <div className="modalInputContainer">
            <label>Code</label>
            <input
              name="code"
              type="text"
              placeholder="Enter coupon code"
              
              required
            />
          </div>
          <div className="modalInputContainer">
            <label>Discount percentage</label>
            <input
              name="discount"
              type="number"
              min="1"
              max="90"
            
              placeholder="Enter discount percentage"
              
              required
            />
          </div>
          <div className="d-flex align-items-center ">
          <input
            type="checkbox"
            checked={isActive}
            id="active_coupon"
            style={{ cursor: "pointer", height: "20px", width: "20px" }}
            onClick={() => setIsactive(!isActive)}
          />
          <label
            htmlFor="active_coupon"
            style={{
              marginLeft: "15px",
              marginBottom: 0,
              fontSize: "18px",
              fontWeight: "500",
              cursor:"pointer"
            }}
          >
            Activate Coupon
          </label>
        </div>
        </div>
        <div className='w-100 d-flex justify-content-center'>
        <button disabled={loading} style={{fontSize:"18px", backgroundColor:"#423c6a", color:"white", fontWeight:"700", borderRadius:"32px"}} className='px-5 py-2' >{loading?"Adding..":"Add"}</button>
        </div>
       </form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
    );
};

export default AddCopunModal;