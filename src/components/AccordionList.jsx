import { AccordionProjects } from "../components/AccordionProjects";
import { v4 as uuidv4 } from "uuid";

export const AccordionList = ({ accordionData, handleToggle, toggle }) => {
  return accordionData.map((value) => {
    const { clientId, clientName, description, stackTech, logo } = value;
    return (
      <div className='card' key={clientId}>
        <div
          className='card-header'
          onClick={() => handleToggle(clientId)}
          style={{ cursor: "pointer" }}
        >
          {" "}
          <b>
            {clientId === toggle ? <span>&#8681;</span> : <span>&#8680;</span>}{" "}
            {clientName}
          </b>
        </div>
        {clientId === toggle ? (
          <>
            <div className='card-body'>
              <div className='d-flex'>
                <img src={logo} alt='#' />
                <div className='d-flex flex-column'>
                  <div>{description}</div>
                  <b>Tech Stack:</b>
                  <ul className='d-flex flex-wrap'>
                    {stackTech.map((item, index) => {
                      return (
                        <li className='ps-1 list-unstyled' key={uuidv4()}>
                          -{item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            {accordionData.map((client) => {
              if (client.clientId === clientId) {
                return (
                  <AccordionProjects
                    key={uuidv4()}
                    projects={client["projects"]}
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
