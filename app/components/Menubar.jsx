import React from "react";
import { NavLink } from "react-router-dom";

const Menubar = ({ isOnWorkImages }) => {
  const galleryUrl = isOnWorkImages ? "WorkImages" : "Gallery";
  return (
    <div className="menubar">
      <ul>
        <li>
          <NavLink activeClassName="active" to={`/${galleryUrl}`}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/About">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menubar;
