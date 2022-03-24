import React from "react";
import { useState } from "react";
import { clients } from "../data/clients";
import { useFetch } from "../hooks/useFetch";
import { AccordionList } from "./AccordionList";

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
        <div className='container-fluid'>
          <div className='row mt-5 '>
            <div className='col-md-9 m-auto'>
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
