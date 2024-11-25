import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import Bag from "./Components/Bag";
import App from "./Routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./Components/bag.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <App /> },
      { path: "/bag", element: <Bag /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
