import React from "react";
import { NavLink } from "react-router";
import { Link } from "react-scroll";

export default function Navber() {
  return (
    <nav className="maxwidth flex justify-between items-center md:py-3 text-white px-4">
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

        <Link
          to="projects"
          smooth={true}
          duration={200}
          className="cursor-pointer"
        >
          Projects
        </Link>
      </div>
    </nav>
  );
}
