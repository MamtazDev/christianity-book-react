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

export const getCoupon = async () => {
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
