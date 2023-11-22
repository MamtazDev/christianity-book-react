export const updateUserInfo = async ({ userId, data }) => {
  const res = await fetch(`http://localhost:8000/api/users/edit/${userId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const changeEmail = async ({ userId, data }) => {
  const res = await fetch(`http://localhost:8000/api/users/changeEmail/${userId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
