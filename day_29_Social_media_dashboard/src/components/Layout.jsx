import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Layout = ({ setIsLoggedIn, user, isLoggedIn }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/register");
    }
    if (currentPath === "/") {
      navigate("/allpost");
    }
  });

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Navbar setIsLoggedIn={setIsLoggedIn} user={user} />
      <div
        style={{
          width: "75%",
          justifySelf: "flex-end",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
