import React from "react";
import { useState } from "react";
import { clients } from "../data/clients";
import { AccordionProjectsList } from "./AccordionProjectsList";

export const AccordionProjects = ({ projects }) => {
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
            handleToggle={handleToggle}
            toggle={toggle}
          />
        </div>
      </div>
    </div>
  );
};
