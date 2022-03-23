export const getRoleObject = (roles, key) => {
  return roles.find(
    (role) => Object.keys(role)[0].toString() === key.toString()
  )[key];
};
