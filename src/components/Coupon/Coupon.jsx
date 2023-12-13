import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { createCoupon, editCoupon, getCoupon } from "../../api/coupon";
import Swal from "sweetalert2";

const Coupon = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const [couponInfo, setCouponInfo] = useState({});

  console.log(couponInfo, "gg");
  const [isActive, setIsactive] = useState(false);

  const getCouponCode = async () => {
    const response = await getCoupon();

    if (response.success) {
      const newData = {
        ...response?.coupon[0],
        discount: response?.coupon[0]?.discount * 100,
      };
      setCouponInfo(newData);
      setIsactive(response?.coupon[0]?.status);
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
          getCouponCode();
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
          getCouponCode();
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

  useEffect(() => {
    getCouponCode();
  }, []);

  return (
    <div>
      <div className="mb_40">
        <h3>Coupon</h3>
        <p>Here you can customize coupon code.</p>
      </div>

      <form onSubmit={handleSubmit} className="profileSetting ">
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
      </form>
    </div>
  );
};

export default Coupon;
