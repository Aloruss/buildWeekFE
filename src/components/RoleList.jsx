import { RoleListItem } from "./RoleListItem";
import { v4 as uuidv4 } from "uuid";
export const RoleList = ({ andis }) => {
  return (
    <>
      <ul key={uuidv4()} className='list-group list-group-flush list-unstyled'>
        {andis["enrolled"].map((andi) => {
          return <RoleListItem key={uuidv4()} andi={andi} />;
        })}
      </ul>
    </>
  );
};
