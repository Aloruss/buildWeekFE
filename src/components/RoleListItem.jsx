import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export const RoleListItem = ({ andi }) => {
  const { name, squad, role, level, andTitle, photo } = andi;
  const [toggle, setToggle] = useState(false);
  return (
    <li key={uuidv4()}>
      <div className='card'>
        <div className='d-flex flex-raw p-2 align-items-center card-body'>
          <img className='avatar' src={photo} alt='#' />
          <a
            role='button'
            className='p-2 link-primary'
            onClick={() => setToggle(!toggle)}
          >
            {name}
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
