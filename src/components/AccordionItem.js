import React, { useState, useEffect } from "react";

const AccordionItem = ({ title, content, id, updateURL, activeIds }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    if (activeIds.indexOf(id) !== -1) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [activeIds, id]);

  return (
    <div className="accordion-item">
      <div
        className="accordion-header"
        onClick={() => {
          setIsActive(!isActive);
          updateURL(id);
        }}
      >
        <button className={`accordion-button ${!isActive && "collapsed"}`}>
          {title}
        </button>
      </div>
      {isActive && (
        <div className="accordion-collapse">
          <div className="accordion-body">{content}</div>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
