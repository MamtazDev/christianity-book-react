import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [resetPasswordInfo, setResetPasswordInfo] = useState({});

  const [contactMessage, setContactMessage] = useState("");
  const [allNotifications, setAllNotifications] = useState([]);
  const [bookId, setBookId] = useState(null);
  const [book, setBook] = useState(null);

  const authInfo = {
    user,
    setUser,
    resetPasswordInfo,
    setResetPasswordInfo,
    contactMessage,
    setContactMessage,
    allNotifications,
    setAllNotifications,
    bookId,
    setBookId,
    book,
    setBook,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
