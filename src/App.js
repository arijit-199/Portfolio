import "./App.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// PAGES
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Profile from "./pages/profile/Profile";

function App() {

  const Layout = () => {

    return (
      <div className="layout">
        <Navbar />
        <Outlet/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />
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