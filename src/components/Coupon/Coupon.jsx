import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { createCoupon, deleteCoupon, editCoupon, getCoupons } from "../../api/coupon";
import Swal from "sweetalert2";
import AddCopunModal from "../Modals/AddCopunModal";
import axios from "axios";
import { BASE_URL } from "../../config/confir";
import EditCouponModal from "../Modals/EditCouponModal";

const Coupon = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const [couponInfo, setCouponInfo] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [allBooks,setAllBooks]=useState([])
  const [allCoupons,setAllCoupons]=useState([])
  const [editModalShow,setEditModalShow]=useState(false)
  const [selectedCoupon,setSelectedCoupon]=useState(null)



  const [isActive, setIsactive] = useState(false);

  const getAllCoupons = async () => {
    const response = await getCoupons();
    if (response?.success) {
      setAllCoupons(response?.coupon);
    }
  };

  const handleInputChange = (event) => {
    setCouponInfo({ ...couponInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    const form = event.target;

    const code = form.code.value;
    const discount = Number((form.discount.value / 100).toFixed(2));
    const status = isActive;
    const couponId = couponInfo?._id;

    try {
      if (couponInfo._id) {
        const response = await editCoupon({ code, discount, status, couponId });
        if (response) {
          getAllCoupon();
          setLoading(false);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Coupon edited successful!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
        const response = await createCoupon({ code, discount, status });
        if (response) {
          getAllCoupon();
          setLoading(false);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Coupon created successful!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
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
  };

  const getPdf = async () => {
    const result = await axios.get(`${BASE_URL}/api/books/get-files`);
    setAllBooks(result.data.data);
  };

  const handleEdit = (value)=>{
setEditModalShow(true)
setSelectedCoupon(value)
  }

  const handleDelete = async (id) => {
    // console.log(id, "idd");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCoupon(id).then((res) => {
          // console.log(res, "ress");
          if (res?.status === 200) {
            getAllCoupons()
            Swal.fire({
              title: "Deleted!",
              text: "Coupon has been deleted.",
              icon: "success",
            });
          
          }
        });
      }
    });

    // if (window.confirm("Are you really want to delete?")) {
    //   const response = await deleteBlog(id);
    //   if (response?.data?.success) {
    //     alert("Blog deleted successfully!");
    //   }
    // }
  };

  console.log(allCoupons,"allcoupons")

  useEffect(()=>{
    getPdf()
  },[])

  useEffect(() => {
    // getCouponCode();
    getAllCoupons()
  }, []);

  return (
    <div>
      <div className="mb_40">
        <h3>Coupon</h3>
        <p>Here you can customize coupon code.</p>
      </div>

      <table class="table table-hover" style={{maxHeight:"500px", overflowY:"scroll"}}>
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Book</th>
      <th scope="col">Coupon</th>
      <th scope="col">Discount</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   {allCoupons && allCoupons?.length>0 && allCoupons?.map((item,idx)=><tr key={idx}>
      <th scope="row">{idx+1}</th>
      <td>{item?.book?.title}</td>
      <td>{item?.code}</td>
      <td>{(item?.discount*100).toFixed(2)}%</td>
      <td>{item?.status ?"Show":"Hide"}</td>
      <td>
        <div style={{display:"flex", gap:"10px"}}>
          <button className="btn btn-primary  btn-sm" onClick={()=>handleEdit(item)}>Edit</button>
          <button className="btn btn-danger  btn-sm" onClick={()=>handleDelete(item?._id)}>Delete</button>
        </div>
      </td>
    </tr>) }
    
   
  </tbody>
</table>
      <div className="profileSetting ">
        <button type="button" className="mt-5" onClick={() => setModalShow(true)}>
           Add Coupon
          </button>
          
          </div>



          <AddCopunModal show={modalShow}
          setModalShow={setModalShow}

          getAllCoupons={getAllCoupons}
         
        onHide={() => setModalShow(false)} allBooks={allBooks}/>

        <EditCouponModal show={editModalShow}
          setModalShow={setEditModalShow}
          getAllCoupons={getAllCoupons}
        onHide={() => setEditModalShow(false)} allBooks={allBooks} selectedCoupon={selectedCoupon}/>


      

      {/* <form onSubmit={handleSubmit} className="profileSetting ">
        <div className="d-flex justify-content-start flex-wrap align-items-end acount_gap mb-5">
          <div className="inputContainer1">
            <label>Code</label>
            <input
              name="code"
              type="text"
              placeholder="Enter coupon code"
              onChange={handleInputChange}
              value={couponInfo?.code}
              required
            />
          </div>
          <div className="inputContainer1">
            <label>Discount percentage</label>
            <input
              name="discount"
              type="number"
              min="1"
              max="90"
              onChange={handleInputChange}
              placeholder="Enter discount percentage"
              value={couponInfo?.discount}
              required
            />
          </div>
        </div>
        <div className="d-flex align-items-center ">
          <input
            type="checkbox"
            checked={isActive}
            // id="remember_me"
            style={{ cursor: "pointer", height: "20px", width: "20px" }}
            onClick={() => setIsactive(!isActive)}
          />
          <label
            // htmlFor="remember_me"
            style={{
              marginLeft: "15px",
              marginBottom: 0,
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            Activate Coupon
          </label>
        </div>

        {loading ? (
          <button type="button" className="mt-5">
            {couponInfo?._id ? "Saving Changes..." : "Creating Coupon..."}
          </button>
        ) : (
          <button type="submit" className="mt-5">
            {couponInfo?._id ? "Save Changes" : "Create Coupon"}
          </button>
        )}
      </form> */}
    </div>
  );
};

export default Coupon;
