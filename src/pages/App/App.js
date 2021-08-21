import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Link,
  useLocation,
  useHistory
} from "react-router-dom";

import RouteWithSubRoutes from "shared/components/RouteWithSubRoutes";
import routes from "./route";
import MainNavbar from "components/MainNavbar";

//import pages

export const AccordionsContext = React.createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  const [accordionValue, setAccordionValue] = useState(window.location.search);
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
  };
  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }


  const history = useHistory();
  let location = useLocation();
  useEffect(() => {
    history.push({ search: accordionValue });
  }, [accordionValue, history, location]);

  return (
    <AccordionsContext.Provider value={{ accordionValue, setAccordionValue }}>
      <main style={themeStyles}>
        <div
          className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
          style={{ width: 280 }}
        >
          <Link
            to="/products"
            className="btn btn-link d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32"></svg>
            <span className="fs-4">LOGO</span>
          </Link>
          <button onClick={toggleTheme} className="btn btn-success mt-2">
            Toggle theme
          </button>
          <hr />
          <MainNavbar />
        </div>

        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}

          <Redirect from="/" to={routes[0].path} />
        </Switch>
      </main>
    </AccordionsContext.Provider>
  );
}
