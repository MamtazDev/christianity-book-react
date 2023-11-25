import { BASE_URL } from "../config/confir";

export const userSignup = async (data) => {
  const res = await fetch(`${BASE_URL}/api/users/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const userLogin = async (data) => {
  const res = await fetch(`${BASE_URL}/api/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateUserInfo = async ({ userId, data }) => {
  const res = await fetch(`${BASE_URL}/api/users/edit/${userId} `, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const changeEmail = async ({ userId, data }) => {
  const res = await fetch(`${BASE_URL}/api/users/changeEmail/${userId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const changePassword = async ({ userEmail, data }) => {
  const res = await fetch(`${BASE_URL}/api/users/changePassword/${userEmail}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const sendOtpToEmail = async (email) => {
  const res = await fetch(`${BASE_URL}/api/users/sendOtp/${email}`);
  return res.json();
};
