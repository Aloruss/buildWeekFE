import { Roles } from "../Roles";
import { v4 as uuidv4 } from "uuid";
//can be refactored because use mostly the same of AccordionList
export const AccordionProjectsList = ({
  accordionData,
  handleToggle,
  toggle,
  andisData,
}) => {
  //data are not fully implemented in the back end so decided to add some fake text
  const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit.!";
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
            {projectId === toggle ? (
              <span className='aarow'>&#8681;</span>
            ) : (
              <span className='aarow'>&#8680;</span>
            )}{" "}
            {projectName.toUpperCase()}
          </b>
        </div>
        {projectId === toggle ? (
          <>
            <div className='card-body'>
              <div className='d-flex flex-column mx-2 text-capitalize'>
                <div>
                  <p>
                    <b className='me-2'>description:</b>{" "}
                    {description ? description : lorem}
                  </p>
                  <p>
                    <b className='me-2'>lead:</b>
                    {lead ? lead : "n/a"}
                  </p>
                  <p>
                    <b className='me-2'>start:</b>
                    {start ? start : "n/a"}
                  </p>
                  <p>
                    <b className='me-2'>end:</b>
                    {end ? end : "n/a"}
                  </p>
                  <p>
                    <b className='me-2'>client contact:</b>
                    {clientContact ? clientContact : "n/a"}
                  </p>
                </div>
              </div>

              <Roles key={uuidv4()} roles={roles} andisData={andisData} />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    );
  });
};