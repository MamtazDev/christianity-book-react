import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { createCoupon, editCoupon } from '../../api/coupon';
import Swal from 'sweetalert2';

const EditCouponModal = ({getAllCoupons,allBooks,setModalShow,selectedCoupon,...props}) => {

    const [loading,setLoading]=useState(false)
    const [couponInfo,setCouponInfo]=useState({})
    const [editInfo,setEditInfo]=useState({})

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setLoading(true);
        
        const data = {
            couponId:selectedCoupon?._id,
            ...editInfo
        }
     
try {
    
const response = await editCoupon(data)
if (response) {
    getAllCoupons()
    setLoading(false);
    setModalShow(false)
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Coupon Updated successful!",
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

    


    useEffect(()=>{
const info = {
book:selectedCoupon?.book?._id,
code:selectedCoupon?.code,
discount:selectedCoupon?.discount*100,
status: selectedCoupon?.status,
}
setCouponInfo(info)
    },[selectedCoupon])
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
       <h4 className='mb-3 text-center '>Edit Coupon</h4>
       <div className="d-flex flex-column gap-3  mb-5">
       <div className="modalInputContainer ">
            <label>Book</label>
            <select name="book" className="form-control" onChange={(e)=>{
                setCouponInfo({...couponInfo, book: e.target.value})
                setEditInfo({...editInfo, book: e.target.value})               
                }}>
              {/* <option  disabled selected>
                Select Book
              </option> */}
              {allBooks?.map((item, idx) => (
                <option value={item._id} key={idx} selected={item?._id===couponInfo?.book}>{item.title}</option>
              ))}
            </select>
          </div>
          <div className="modalInputContainer">
            <label>Code</label>
            <input
              name="code"
              type="text"
              placeholder="Enter coupon code"
              value={couponInfo?.code}
              onChange={(e)=>{
                setCouponInfo({...couponInfo, code: e.target.value})
              setEditInfo({...editInfo, code: e.target.value})
            }}
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
            value={couponInfo?.discount}
              placeholder="Enter discount percentage"
              onChange={(e)=>{
                setCouponInfo({...couponInfo, discount: e.target.value})
              setEditInfo({...editInfo, discount: Number(e.target.value/100)})
            }}
              required
            />
          </div>
          <div className="d-flex align-items-center ">
          <input
            type="checkbox"
            checked={couponInfo?.status}
            id="active_coupon"
            style={{ cursor: "pointer", height: "20px", width: "20px" }}
            onClick={() => {
                setCouponInfo({...couponInfo, status: !couponInfo?.status})
              setEditInfo({...editInfo, status: !couponInfo?.status})
            }}
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
            Show Coupon
          </label>
        </div>
        </div>
        <div className='w-100 d-flex justify-content-center'>
        <button disabled={loading} style={{fontSize:"18px", backgroundColor:"#423c6a", color:"white", fontWeight:"700", borderRadius:"32px"}} className='px-5 py-2' >{loading?"Updating..":"Update"}</button>
        </div>
       </form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
    );
};

export default EditCouponModal;