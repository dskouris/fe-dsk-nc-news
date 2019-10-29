export const capitalise = str => {
  let firstLetter = str[0].toUpperCase();
  return firstLetter + str.slice(1);
};
