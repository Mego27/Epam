import getDay from './get-day.js';

function getDate(year, month, day, format) {
  const date = {
    date: `${year}-${month}-${day}`,
    format,
  };
  const resultDate = JSON.parse(getDay(JSON.stringify(date)));
  console.log(resultDate);

  return resultDate;
}
