import React, {useContext, useEffect} from "react";
import { useHistory, useLocation } from "react-router-dom";
import { AccordionsContext } from 'pages/App/App'

import AccordionItem from './AccordionItem';

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Accordion = ({queryId, accordionData}) => {
  const {accordionValue, setAccordionValue} = useContext(AccordionsContext)

  const history = useHistory();
  let query = useQuery();
  useEffect(() => {
    history.push({ search: accordionValue });
  }, [accordionValue, history]);
  
  const updateURL = (id) => { 
    let tempQuery = query.get(queryId)?query.get(queryId).split(" "):[] 
        
    if(tempQuery.indexOf(id) !== -1){
      const idx = tempQuery.indexOf(id) 
      console.log("index:", idx)       
      tempQuery.splice(idx, 1);      
    } else {
      console.log(tempQuery)
      tempQuery.push(id);
    }
    query.delete(queryId);
    query.append(queryId, tempQuery.join(" "));
    history.push({ search: query.toString() });
    setAccordionValue(query.toString())
  }
  const activeIds = query.get(queryId)?query.get(queryId).split(" "):[]; 
  
  return (
    
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content, id }) => {
          const accItemProps = {
            title,
            content, 
            id, 
            updateURL,
            activeIds
          }
          return <AccordionItem {...accItemProps} key={id}  />
        })}
      </div>
    </div>
  );
};

export default Accordion;
