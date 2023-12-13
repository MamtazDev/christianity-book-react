// require('dotenv').config();
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/routes";
import useAuthCheck from "./hooks/useAuthChecked";

function App() {
  const authChecked = useAuthCheck();

  return <>{authChecked ? <RouterProvider router={router} /> : ""}</>;
}

export default App;
