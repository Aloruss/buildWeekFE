import React from "react";
import { useState } from "react";
import { clients } from "../data/clients";
import { AccordionList } from "./AccordionList";
import { Banner } from "../components/Banner"
import { Description } from "./Description";
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
    <>
    
    <div className='container-fluid p-0'>
    <Banner />
    <Description />
    {/* <h1 id="infoOnClientPage">Clients and projects of Club Sparck</h1> */}
      <div className='row'>
        <div className='col-md m-auto'>
          <AccordionList
            accordionData={clients}
            handleToggle={handleToggle}
            toggle={toggle}
          />
        </div>
      </div>
    </div>
    
    </>
  );
};
