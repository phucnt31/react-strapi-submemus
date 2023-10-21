import React from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button type="button" className="toggle-btn">
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
