import { useState } from "react";
import { RoleList } from "./RoleList";
import { getRoleObject } from "../helper/getRoleObject";
import { v4 as uuidv4 } from "uuid";

export const Roles = ({ roles, andisData }) => {
  const rolesKeys = roles.map((role) => Object.keys(role));
  const [toggle, setToggle] = useState(false);
  const [andis, setAndis] = useState({});

  const handleClick = (key) => {
    let andiArray = [];
    setToggle(true);
    const roleObject = getRoleObject(roles, key);
    const { enrolled } = roleObject;

    for (let andiEnrolled of enrolled) {
      for (let andi of andisData) {
        if (andiEnrolled.andiId === andi.andiId) {
          andiArray.push(andi);
        }
      }
    }
    setAndis({ enrolled: andiArray, quantityTotal: roleObject.quantityTotal });
  };
  return (
    <>
      {rolesKeys.map((key) => {
        const enrolledQuantity = getRoleObject(roles, key)["enrolled"].length;
        const totalQuantity = getRoleObject(roles, key)["quantityTotal"];

        return (
          <>
            {totalQuantity > 0 ? (
              <button
                key={uuidv4()}
                type='button'
                className='fw-bold btn ms-2 mb-2 '
                onClick={() => handleClick(key)}
                style={{backgroundColor: '#ff323c', color: `#fff`}}
              >
                {`${key} enrolled: ${enrolledQuantity} out of ${totalQuantity} positions available`}
              </button>
            ) : null}
          </>
        );
      })}
      {toggle && <RoleList key={uuidv4()} andis={andis} />}
    </>
  );
};
