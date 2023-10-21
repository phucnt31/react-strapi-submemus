import React, { useRef } from "react";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((sublink) => sublink.pageId === pageId);
  const submenuRef = useRef(null);

  const handleMouseLeave = (event) => {
    const { left, right, bottom } = submenuRef.current.getBoundingClientRect();
    const { clientX, clientY } = event;

    if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };

  return (
    <div
      ref={submenuRef}
      onMouseLeave={handleMouseLeave}
      className={currentPage ? "show-submenu submenu" : "submenu"}
    >
      <h5>{currentPage?.page}</h5>
      <div className="submenu-links" style={{ gridTemplateColumns: "1fr 1fr" }}>
        {currentPage?.links.map((link) => {
          const { icon, id, label, url } = link;
          return (
            <a href={url} key={id}>
              {icon} {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
