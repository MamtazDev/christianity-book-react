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
