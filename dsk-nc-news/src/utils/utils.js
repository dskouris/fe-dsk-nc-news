export const capitalise = str => {
  if (str.length === 0) {
    return '';
  }
  let firstLetter = str[0].toUpperCase();
  return firstLetter + str.slice(1);
};

export const formatTimestamp = dateStr => {
  if (dateStr.length === 0) {
    return '';
  }
  const year = dateStr.slice(0, 4);
  const month = dateStr.slice(4, 8);
  const day = dateStr.slice(8, 10);
  const date = day + month + year;
  const time = dateStr.slice(11, 16);
  return `${time}, ${date}`;
};
