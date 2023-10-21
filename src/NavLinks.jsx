import React from "react";
import sublinks from "./data";

const NavLinks = () => {
  return (
    <div className="nav-links">
      {sublinks.map((sublink) => {
        const { page, pageId } = sublink;
        return (
          <button className="nav-link" key={pageId}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
