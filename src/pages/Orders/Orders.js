import React from "react";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import routeConstants from "shared/constants/routes";
import General from "./pages/General/General";

import RouteWithSubRoutes from "shared/components/RouteWithSubRoutes";
import Addresses from "./pages/Addresses/Addresses";
import OrdersSub from "./pages/Orders/Orders";
const { ORDERS } = routeConstants;
const { GENERAL } = ORDERS.subroutes;
const { ADDRESSES } = ORDERS.subroutes;

const Orders = ({ routes }) => {
  let match = useRouteMatch();
  console.log(routes);

  return (
    <div className="w-100">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li>
            <NavLink
              to={`${match.url}/general`}
              activeClassName="active"
              className="nav-link"
            >
              {GENERAL.name}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${match.url}/addresses`}
              activeClassName="active"
              className="nav-link"
            >
              {ADDRESSES.name}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${match.url}/orders`}
              activeClassName="active"
              className="nav-link"
            >
              {ORDERS.name}
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="container-fluid overflow-auto">
        {/* The Orders page has its own <Switch> with more routes
          that build on the /general URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}

        <Switch>
          <Route path={`${match.path}/general`}>
            <General />
          </Route>
          <Route path={`${match.path}/addresses`}>
            <Addresses />
          </Route>
          <Route path={`${match.path}/orders`}>
            <OrdersSub />
          </Route>
          <Route exact path={match.path}>
            <General />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default Orders;
