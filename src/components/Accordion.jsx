import React from "react";
import { useState } from "react";
import { clients } from "../data/clients";
import { useFetch } from "../hooks/useFetch";
import { AccordionList } from "./AccordionList";
import { Banner } from "../components/Banner";
import { Description } from "./Description";
export const Accordion = () => {
  const [toggle, setToggle] = useState(null);
  const {
    data: clientz,
    loading,
    error,
  } = useFetch("http://127.0.0.1:5000/moonapi/v1/clients");
  const {
    data: projectz,
    loading: loadingProjectz,
    error: errorProjectz,
  } = useFetch("http://127.0.0.1:5000/moonapi/v1/projects");
  const {
    data: andiz,
    loading: loadingAndiz,
    error: errorAndiz,
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
      {clientz && andiz && projectz && (
        <div className='container-fluid p-0'>
          <Banner />
          <Description />
          {/* <h1 id="infoOnClientPage">Clients and projects of Club Sparck</h1> */}
          <div className='row'>
            <div className='col-md m-auto'>
              <AccordionList
                clientsData={clientz}
                projectsData={projectz}
                andisData={andiz}
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
