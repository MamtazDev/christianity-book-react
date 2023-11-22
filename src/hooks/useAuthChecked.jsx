import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const useAuthCheck = () => {
  const { setUser } = useContext(AuthContext);

  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localAuth = localStorage.getItem("loggedInUser");
    if (localAuth) {
      const auth = JSON.parse(localAuth);
      if (auth) {
        setUser(auth);
      }
    }
    setAuthChecked(true);
  }, [setUser]);

  return authChecked;
};

export default useAuthCheck;
