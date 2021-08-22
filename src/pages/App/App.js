import React, { useState, useEffect } from "react";
import {
  Switch,
  Redirect,
  Link,
  useLocation,
  useHistory,
} from "react-router-dom";

import RouteWithSubRoutes from "shared/components/RouteWithSubRoutes";
import routes from "./route";
import MainNavbar from "components/MainNavbar";

//import pages

export const AccordionsContext = React.createContext();

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

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
  let query = useQuery();

  const updateURL = (queryId, id) => { 
    let tempQuery = query.get(queryId)?query.get(queryId).split(" "):[] 
        
    if(tempQuery.indexOf(id) !== -1){
      const idx = tempQuery.indexOf(id)      
      tempQuery.splice(idx, 1);      
    } else {
      tempQuery.push(id);
    }
    query.delete(queryId);
    query.append(queryId, tempQuery.join(" "));
    history.push({ search: query.toString() });
    setAccordionValue(query.toString())
  }

  const updateTabURL = (tabId, id) => {  
    if(query.get(tabId)){
      query.delete(tabId);
    }     
    
    query.append(tabId, id);
    setAccordionValue(query.toString())
    
  }

  


  const history = useHistory();
  let location = useLocation();
  useEffect(() => {
    history.push({ search: accordionValue });
  }, [accordionValue, history, location.search]);

  return (
    <AccordionsContext.Provider value={{ accordionValue, setAccordionValue, updateURL, updateTabURL }}>
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
