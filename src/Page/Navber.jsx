import React from "react";
import { NavLink } from "react-router";

export default function Navber() {
  return (
    <nav className="maxwidth flex justify-between items-center md:py-5 text-white">
      <h1 className="text-xl font-bold">
        <span className="text-[#00b4d8]">Md</span> Torikul
      </h1>
      <div className="flex gap-4 md:gap-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-bold border-b-3 border-[#00b4d8] text-[#00b4d8]"
              : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-bold border-b-3 border-[#00b4d8] text-[#00b4d8]"
              : ""
          }
          to="/projects"
        >
          Projects
        </NavLink>
      </div>
    </nav>
  );
}
