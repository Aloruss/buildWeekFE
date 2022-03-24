import { AccordionProjects } from "../components/AccordionProjects";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const AccordionList = ({
  clientsData,
  handleToggle,
  toggle,
  projectsData,
  andisData,
}) => {
  return clientsData.map((value) => {
    const { clientId, clientName, description, stackTech, logo, projects } =
      value;
    //go through projects, find each of the projects, inside the projectsData
    let projectsArray = [];
    for (let project of projects) {
      for (let projectData of projectsData) {
        if (projectData.projectId === project.id) {
          projectsArray.push(projectData);
        }
      }
    }

    return (
      <div className='card no-border mt-2 p-2 shadow-sm' key={clientId} >
        <div className="d-flex justify-content-between" style={{ cursor: "pointer", borderCol: '#ff323c' }} onClick={() => handleToggle(clientId)}>         
        <div
          className=''
          
          
        >
          {" "}
          <b >
            {clientId === toggle ? <span className="aarow">&#8681;</span> : <span className="aarow">&#8680;</span>}{" "}
            {clientName.toUpperCase()}
          </b>

        </div>
          <img className='me-5 rounded"' src={logo} alt='#' />

        </div>

        {clientId === toggle ? (
          <>
            <div className='card-body'>
              <div className='d-flex'>
                {/* <img className='me-5' src={logo} alt='#' /> */}
                <div className='d-flex flex-column ms-2'>
                  <div className=' mb-2 '>{description}</div>
                  <b>Tech Stack:</b>
                  <ul className='list-group list-group-flush'>
                    {stackTech.map((item, index) => {
                      return (
                        <li className='list-group-item' key={uuidv4()}>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            {clientsData.map((client) => {
              if (client.clientId === clientId) {
                return (
                  <AccordionProjects
                    key={uuidv4()}
                    projects={projectsArray}
                    andisData={andisData}
                  />
                );
              }
            })}
          </>
        ) : (
          ""
        )}
      </div>
    );
  });
};
