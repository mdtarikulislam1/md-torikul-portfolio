import React from "react";
import Navber from "../Page/Navber";
import { Outlet } from "react-router";
import Contact from "../Page/Contact";

export default function RootLayouts() {
  return (
    <div className="bg-[#14213d]">
      <Navber />
      <Outlet />
      <Contact />
    </div>
  );
}
