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
              <img src={logo} alt='#' />
              <div>{description}</div>
              <h5>Tech Stack</h5>
              {stackTech.map((item, index) => {
                return <li key={uuidv4()}>{item}</li>;
              })}
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
