import { useState } from "react";
import { RoleList } from "./RoleList";
import { getRoleObject } from "../helper/getRoleObject";
export const Roles = ({ roles }) => {
  const rolesKeys = roles.map((role) => Object.keys(role));
  const [toggle, setToggle] = useState(false);
  const [andis, setAndis] = useState({});
  console.log("roles", roles);
  // quantityTotal and lenght of enrolled
  // TO DO: get for each role quantity of role asked from client and quantity of andis enrolled
  // rolesKeys.map((key) => {roles.find(
  //     (role) => Object.keys(role)[0].toString() === key.toString()
  //   );

  const handleClick = (key) => {
    setToggle(true);
    console.log("key", key);
    const roleObject = getRoleObject(roles, key);

    console.log(roleObject);
    setAndis(roleObject);
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
                type='button'
                className='btn btn-danger ms-2 mb-2 '
                onClick={() => handleClick(key)}
              >
                {key} enrolled: {enrolledQuantity} out of {totalQuantity}
                positions available
              </button>
            ) : null}
          </>
        );
      })}
      {toggle && <RoleList andis={andis} />}
    </>
  );
};
