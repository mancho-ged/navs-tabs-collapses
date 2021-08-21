import React from "react";
import { NavLink } from "react-router-dom";
import routeConstants from "shared/constants/routes";

const navItems = Object.values(routeConstants);

const MainNavbar = () => {
  return (
    <ul className="nav nav-pills flex-column mb-auto">
      {navItems.map((navItem, i) => (
        <li key={i}>
          <NavLink
            to={navItem.route}
            activeClassName="active"
            className="nav-link"
          >
            {navItem.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MainNavbar;
