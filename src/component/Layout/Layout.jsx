import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="mx-4 md:mx-0">
      <Outlet></Outlet>
      </div>
     
    </div>
  );
};

export default Layout;
