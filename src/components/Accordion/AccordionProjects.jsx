import React from "react";
import { useState } from "react";
import { AccordionProjectsList } from "./AccordionProjectsList";
//could be refactored because use mostly the same as Accordion.jsx
export const AccordionProjects = ({ projects, andisData }) => {
  const [toggle, setToggle] = useState(null);

  let handleToggle = (id) => {
    if (toggle === id) {
      setToggle(null);
      return false;
    }
    setToggle(id);
  };

  return (
    <div className='container-fluid'>
      <div className='row '>
        <div className='col-md-12 '>
          <AccordionProjectsList
            accordionData={projects}
            andisData={andisData}
            handleToggle={handleToggle}
            toggle={toggle}
          />
        </div>
      </div>
    </div>
  );
};
