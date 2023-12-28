// import { useContext } from "react";
// import Leftbar from "./components/leftbar/Leftbar";
// import Navbar from "./components/navbar/Navbar";
// import Rightbar from "./components/rightbar/Rightbar";
// import Home from "./pages/home/Home";
// import Profile from "./pages/profile/Profile";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
// import "./style.scss";
// import { DarkModeContext } from "./context/darkModeContext";
// import { AuthContext } from "./context/auth/authContext";
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "./App.css";


function App() {

  // const { currentUser } = useContext(AuthContext);

  // const { darkMode } = useContext(DarkModeContext);

  // const queryClient = new QueryClient();

  // const Layout = () => {
  //   return (
  //     // <QueryClientProvider client={queryClient}>
  //       <div>
  //         <Navbar />
  //         <div style={{ display: "flex" }}>
  //           <Leftbar />
  //           <div style={{ flex: 6 }}>
  //             <Outlet />
  //           </div>
  //           <Rightbar />
  //         </div>
  //       </div>
  //     // </QueryClientProvider>
  //   )
  // };

  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/login" />
  //   }

  //   return children;
  // };
  return (
    <div className="App">
      <h1>Hello World!!!!!!!</h1>
    </div>
  );
};

export default App;

