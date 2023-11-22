export const addNotifications = async (data) => {
  const res = await fetch("http://localhost:8000/api/notifications/add", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getUserNotifications = async (data) => {
  const res = await fetch(
    `http://localhost:8000/api/notifications/userNotifications`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return res.json();
};
