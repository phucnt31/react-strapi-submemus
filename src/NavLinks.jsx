import React from "react";
import sublinks from "./data";
import { useGlobalContext } from "./context";

const NavLinks = () => {
  const { setPageId } = useGlobalContext();

  return (
    <div className="nav-links">
      {sublinks.map((sublink) => {
        const { page, pageId } = sublink;
        return (
          <button
            className="nav-link"
            key={pageId}
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
