import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import Client from "./pages/Client/Client";

const HomePage = lazy(() => import('./pages/Home/Home'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/client",
    element: <Client />
  },
]);

export default function App() {
  return (<RouterProvider router={router} />);
}