function printDate(year, month, day, format) {
  const date = {
    date: `${year}-${month}-${day}`,
    format,
  };
  const dateWithWeekday = getDay(JSON.stringify(date));
  const resultDate = JSON.parse(dateWithWeekday);
  console.log(resultDate);
}

function getDay(dateAndFormat) {
  const { date: dateStr, format: isFullTitleDay } = JSON.parse(dateAndFormat);
  const date = new Date(dateStr);
  let weekDayStyle = 'short';

  if (isFullTitleDay) {
    weekDayStyle = 'long';
  }

  return JSON.stringify(date.toLocaleString('ru-RU', {
    weekday: weekDayStyle,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }));
}
