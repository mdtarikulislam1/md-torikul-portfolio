import React from "react";
import Navber from "../Page/Navber";
import { Outlet } from "react-router";
import Contact from "../Page/Contact";

export default function RootLayouts() {
  return (
    <div className="bg-[#14213d]">
     <div className="bg-[#192a4d] sticky z-50 top-0 right-0 left-0 py-2">
       <Navber />
     </div>
      <Outlet />
      <Contact />
    </div>
  );
}
