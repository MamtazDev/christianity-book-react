import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/routes";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense fallback="..loading">
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
