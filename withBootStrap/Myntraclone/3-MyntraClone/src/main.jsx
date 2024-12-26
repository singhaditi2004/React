import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import Bag from "./Components/Bag";
import App from "./Routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./Routes/Bag.jsx";
import Home from "./Routes/Home.jsx";
import { Provider } from "react-redux";
import MyntraStore from "./Store/index.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={MyntraStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
