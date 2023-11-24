import { BASE_URL } from "../config/confir";

export const addConversationBySenderReciver = async (data) => {
  const res = await fetch(`${BASE_URL}/api/conversations/add`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getConversationOfTwoUsers = async (userId) => {
  const res = await fetch(`${BASE_URL}/api/conversations/users/${userId}`);
  return res.json();
};

export const getMessageByConversationId = async (conversationId) => {
  const res = await fetch(`${BASE_URL}/api/messages/${conversationId}`);
  return res.json();
};

export const addMessage = async (data) => {
  const res = await fetch(`${BASE_URL}/api/messages/add`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
