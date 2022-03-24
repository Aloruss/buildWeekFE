import React from "react";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { AccordionList } from "./AccordionList";
import { Banner } from "../Banner";
import { Description } from "../Description";
export const Accordion = () => {
  const [toggle, setToggle] = useState(null);
  const {
    data: clients,
    loading,
    error,
  } = useFetch("http://127.0.0.1:5000/moonapi/v1/clients");
  const {
    data: projects,
    loading: loadingProjects,
    error: errorProjects,
  } = useFetch("http://127.0.0.1:5000/moonapi/v1/projects");
  const {
    data: andis,
    loading: loadingAndis,
    error: errorAndis,
  } = useFetch("http://127.0.0.1:5000/moonapi/v1/andis");

  let handleToggle = (id) => {
    if (toggle === id) {
      setToggle(null);
      return false;
    }
    setToggle(id);
  };

  return (
    <>
      {(loading || loadingProjects || loadingAndis) && <p>{loading}</p>}
      {(error || errorAndis || errorProjects) && <p>{error}</p>}
      {clients && andis && projects && (
        <div className='container-fluid p-0'>
          <Banner />
          <Description />
          <div className='row'>
            <div className='col-md m-auto'>
              <AccordionList
                clientsData={clients}
                projectsData={projects}
                andisData={andis}
                handleToggle={handleToggle}
                toggle={toggle}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
