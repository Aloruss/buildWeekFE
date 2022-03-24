import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export const RoleListItem = ({ andi }) => {
  const { name, squad, level, andTitle, photo } = andi;
  const [toggle, setToggle] = useState(false);
  return (
    <li key={uuidv4()}>
      <div className='card'>
        <div
          style={{ cursor: "pointer" }}
          className='d-flex flex-raw p-2 align-items-center card-body'
          onClick={() => setToggle(!toggle)}
        >
          <img className='avatar' src={photo} alt='#' />
          <a role='button' className='p-2 link-primary  text-decoration-none'>
            <b>{name}</b>
          </a>
        </div>
        {toggle && (
          <div className='mx-auto' onClick={() => setToggle(false)}>
            <p>
              <b>And title:</b> {andTitle}
            </p>
            <p>
              <b>Squad: </b>
              {squad}
            </p>
            <p>
              <b>Level:</b> {level}
            </p>
          </div>
        )}
      </div>
    </li>
  );
};
