import { RoleListItem } from "./RoleListItem";
export const RoleList = ({ andis }) => {
  return (
    <>
      <ul className='list-group list-group-flush list-unstyled'>
        {andis["enrolled"].map((andi) => {
          return <RoleListItem andi={andi} />;
        })}
      </ul>
    </>
  );
};

/* {rolesKeys.map((key) => {
        return (
          <ul key={uuidv4()}>
            {key}
            {roles.map((role) => {
              let andi2;
              if (role[key]) {
                andi2 = role[key]["enrolled"].map(
                  ({ name, squad, role, level, andTitle, photo }) => {
                    return (
                      <li key={uuidv4()}>
                        <p>Name: {name}</p>
                        <p>Squad: {squad}</p>
                        <p>Level: {level}</p>
                        <p>And title: {andTitle}</p>
                        <img src={photo} alt='#' />
                      </li>
                    );
                  }
                );
              }
              return andi2;
            })}
          </ul>
        );
      })} */
