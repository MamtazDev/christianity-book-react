import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [resetPasswordInfo, setResetPasswordInfo] = useState({});

  const authInfo = {
    user,
    setUser,
    resetPasswordInfo,
    setResetPasswordInfo,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
