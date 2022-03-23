import { Roles } from "./Roles";
import { v4 as uuidv4 } from "uuid";

export const AccordionProjectsList = ({
  accordionData,
  handleToggle,
  toggle,
}) => {
  return accordionData.map((value) => {
    const {
      projectId,
      projectName,
      description,
      lead,
      start,
      end,
      clientContact,
      roles,
    } = value;
    return (
      <div className='card' key={projectId}>
        <div
          className='card-header'
          onClick={() => handleToggle(projectId)}
          style={{ cursor: "pointer" }}
        >
          {" "}
          <b>
            {projectId === toggle ? <span>&#8681;</span> : <span>&#8680;</span>}{" "}
            {projectName}
          </b>
        </div>
        {projectId === toggle ? (
          <>
            <div className='card-body'>
              <div className='d-flex flex-column mx-2 text-capitalize'>
                <div>
                  <p>
                    <b className='me-2'>description:</b> {description}
                  </p>
                  <p>
                    <b className='me-2'>lead:</b>
                    {lead}
                  </p>
                  <p>
                    <b className='me-2'>start:</b>
                    {start}
                  </p>
                  <p>
                    <b className='me-2'>end:</b>
                    {end ? end : "n/a"}
                  </p>
                  <p>
                    <b className='me-2'>client contact:</b>
                    {clientContact}
                  </p>
                </div>
              </div>
              <Roles key={uuidv4()} roles={roles} />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    );
  });
};
