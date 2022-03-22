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
              <h4>description: {description}</h4>
              <p>lead:{lead}</p>
              <p>start:{start}</p>
              <p>end:{end ? end : "n/a"}</p>
              <p>client contact:{clientContact}</p>
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
