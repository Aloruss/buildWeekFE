import { useState } from "react";
import { RoleList } from "./RoleList";
import { getRoleObject } from "../helper/getRoleObject";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@material-ui/core";

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
          <div key={uuidv4()}>
            {totalQuantity > 0 ? (
              <Button
                key={uuidv4()}
                variant='contained'
                color='secondary'
                onClick={() => handleClick(key)}
                size='medium'
                style={{ width: "50em", marginBottom: "0.5em" }}
              >
                {`${key} enrolled: ${enrolledQuantity} out of ${totalQuantity} positions available`}
              </Button>
            ) : null}
          </div>
        );
      })}
      {toggle && <RoleList key={uuidv4()} andis={andis} />}
    </>
  );
};
