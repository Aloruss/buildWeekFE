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
    <>
      <div className='container-fluid'>
        <div className='row '>
          <div className='col-md-12 '>
            {projects.length > 0 && (
              <>
                <h4>Projects: </h4>
                <p>(Click one of the below button to see more info)</p>
              </>
            )}
            <AccordionProjectsList
              accordionData={projects}
              andisData={andisData}
              handleToggle={handleToggle}
              toggle={toggle}
            />
          </div>
        </div>
      </div>
    </>
  );
};
