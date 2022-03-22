import React from "react";
import { useState } from "react";
import { clients } from "../data/clients";
import { AccordionList } from "./AccordionList";

export const Accordion = () => {
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
      <div className='row m-l-10'>
        <div className='col-md-8 mx-auto'>
          <AccordionList
            accordionData={clients}
            handleToggle={handleToggle}
            toggle={toggle}
          />
        </div>
      </div>
    </div>
  );
};
