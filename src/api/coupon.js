import { BASE_URL } from "../config/confir";

export const createCoupon = async (data) => {
  const res = await fetch(`${BASE_URL}/api/coupon/add`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getCoupons = async () => {
  const res = await fetch(`${BASE_URL}/api/coupon/`);
  return res.json();
};

export const editCoupon = async (data) => {
  const res = await fetch(`${BASE_URL}/api/coupon/edit`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteCoupon = async(id)=>{
  const res = await fetch(`${BASE_URL}/api/coupon/delete/${id}`,{
    method:"DELETE"
  })
  return res.json();
}

export const getBookCouponInfo = async(id)=>{
  const res = await fetch(`${BASE_URL}/api/coupon/bookInfo/${id}`);
  return res.json();
}
