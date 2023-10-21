import React from "react";
import { useGlobalContext } from "./context";
import sublinks from "./data";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? "show-sidebar sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button type="button" className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div>
          {sublinks.map((sublink) => {
            const { links, page, pageId } = sublink;
            return (
              <article key={pageId}>
                <div className="sidebar-sublinks">
                  <h4>{page}</h4>
                  {links.map((link) => {
                    const { icon, id, label, url } = link;
                    return (
                      <a href={url} key={id}>
                        {icon} {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
