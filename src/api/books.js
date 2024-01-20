import { BASE_URL } from "../config/confir";

export const purchaseBook = async (data) => {
  const res = await fetch(`${BASE_URL}/api/books/purchase-book`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
export const asksHardCopy = async (data) => {
  const res = await fetch(`${BASE_URL}/api/books/asksHardCopy`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getBookInfo = async (bookId) => {
  const res = await fetch(`${BASE_URL}/api/books/getBookInfo/${bookId}`);
  return res.json();
};

export const getUserRequests = async (userId) => {
  const res = await fetch(`${BASE_URL}/api/books/getUserRequest/${userId}`);
  return res.json();
};
export const getBookBuffer = async (userId, bookId) => {
  const res = await fetch(
    `${BASE_URL}/getbook-buffer?user_id=${userId}&&bookId=${bookId}`,
  );
  return res.json();
};
