import { BASE_URL } from "../config/confir";

export const addNotifications = async (data) => {
  const res = await fetch(`${BASE_URL}/api/notifications/add`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getUserNotifications = async (data) => {
  const res = await fetch(`${BASE_URL}/api/notifications/userNotifications`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const makeNotificationSeen = async (data) => {
  const res = await fetch(`${BASE_URL}/api/notifications/notificationStatus`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
