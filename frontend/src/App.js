import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// PAGES
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";

function App() {

  const Layout = () => {
    return (
      <div className="layout">
        <Navbar />
        <Outlet />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Home />
        }
      ]
    },

  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App