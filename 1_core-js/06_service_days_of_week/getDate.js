import getDay from './getDay.js';

function getDate(year, month, day, format) {
  const date = {
    date: `${year}-${month}-${day}`,
    format,
  };
  const resultDate = getDay(JSON.stringify(date));
  console.log(resultDate);
  return resultDate;
}
