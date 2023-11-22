export const addConversationBySenderReciver = async (data) => {
  const res = await fetch("http://localhost:8000/api/conversations/add", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getConversationOfTwoUsers = async (userId) => {
  const res = await fetch(
    `http://localhost:8000/api/conversations/users/${userId}`
  );
  return res.json();
};

export const getMessageByConversationId = async (conversationId) => {
  const res = await fetch(
    `http://localhost:8000/api/messages/${conversationId}`
  );
  return res.json();
};

export const addMessage = async (data) => {
  const res = await fetch("http://localhost:8000/api/messages/add", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
