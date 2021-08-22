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
  const {accordionValue, updateURL} = useContext(AccordionsContext)

  const history = useHistory();
  let query = useQuery();
  useEffect(() => {
    history.push({ search: accordionValue });
  }, [accordionValue, history]);
  
  
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
            activeIds,
            queryId
          }
          return <AccordionItem {...accItemProps} key={id}  />
        })}
      </div>
    </div>
  );
};

export default Accordion;
