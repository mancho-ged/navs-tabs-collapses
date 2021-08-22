import React, { useEffect, useContext } from "react";
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import routeConstants from "shared/constants/routes";
import General from "./pages/General/General";
import { AccordionsContext } from "pages/App/App";
import Addresses from "./pages/Addresses/Addresses";
import OrdersSub from "./pages/Orders/Orders";
const { ORDERS } = routeConstants;
const { GENERAL } = ORDERS.subroutes;
const { ADDRESSES } = ORDERS.subroutes;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Orders = ({ routes }) => {
  let match = useRouteMatch();

  const { accordionValue, updateTabURL } =
    useContext(AccordionsContext);

  const history = useHistory();

  useEffect(() => {
    history.push({ search: accordionValue });
  }, [accordionValue, history]);

  let query = useQuery();

  // const [activeTab, setActiveTab] = useState(
  //   query.get("b") ? query.get("b") : null
  // );
  let activeTab = query.get("tabs1") ? query.get("tabs1") : null
  useEffect(() => {
    // setActiveTab(query.get("tabs1"));
  }, [query, history]);

  return (
    <div className="w-100">
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-2">
        <ul className="nav nav-tabs w-100">
          <li className="nav-item">
            <NavLink
              to={`${match.url}/general`}
              activeClassName="active"
              className="nav-link"
              onClick={() => updateTabURL("tabs1", "general")}
            >
              {GENERAL.name}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${match.url}/addresses`}
              activeClassName="active"
              className="nav-link"
              onClick={() => updateTabURL("tabs1", "addresses")}
            >
              {ADDRESSES.name}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${match.url}/orders`}
              activeClassName="active"
              className="nav-link"
              onClick={() => updateTabURL("tabs1", "orders")}
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
          <Route
            path={match.path}
            render={() => {
              let redirectPath = `${match.path}/${activeTab}`
              return activeTab ? (
                <Redirect to={`${redirectPath}`} />
              ) : (
                <General />
              );
            }}
          />
        </Switch>
      </div>
    </div>
  );
};
export default Orders;
