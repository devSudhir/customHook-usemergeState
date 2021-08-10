export const useMergeState = (prop) => {
  console.log("prop", prop);
  return [prop.username, prop.email, prop.password];
};
