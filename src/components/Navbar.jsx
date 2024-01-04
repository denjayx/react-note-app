import { BiNote } from "react-icons/bi";
import React from "react";
import { BsFillArchiveFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <section>
      <NavLink
        to="/archived"
        className="flex items-center text-sm gap-2 bg-primary-900 hover:bg-primary-950 duration-300 border border-primary-400 py-2 px-4 rounded-lg"
      >
        <span>Arsip</span>
        <BsFillArchiveFill />
      </NavLink>
    </section>
  );
}

export default Navbar;
