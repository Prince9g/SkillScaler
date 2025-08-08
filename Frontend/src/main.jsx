import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Dashboard/Navbar.jsx";
import Bottom from "./components/Dashboard/Bottom.jsx";
import CreateTest from "./components/Dashboard/CreateTest.jsx";
import YourTests from "./components/Dashboard/YourTests.jsx";
import Performance from "./components/Dashboard/Performance.jsx";
import Profile from "./components/Dashboard/Profile.jsx";
import Question from "./components/Question.jsx";
// import Create from "./components/Create.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Bottom />,
      },
      {
        path:"/create-test",
        element:<CreateTest/>
      },
      {
        path:"/your-test",
        element:<YourTests/>
      },
      {
        path:"/performance",
        element:<Performance/>
      },
      {
        path:"/profile",
        element:<Profile/>
      },
      {
        path:"/test",
        element:<Question/>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
