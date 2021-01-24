function getDate(day, month, year, format = 'year_month_day') {
  let date = null;
  const isCorrectDay = (typeof (day) === 'number') && (day >= 1 && day <= 31);
  const isCorrectMonth = (typeof (month) === 'number') && (month >= 1 && month <= 12);
  const isCorrectYear = (typeof (year) === 'number') && (year >= 1000);

  if (isCorrectDay && isCorrectMonth && isCorrectYear) {
    switch (format) {
      case 'day.month.year': {
        date = `${day}.${month}.${year}`;
        break;
      }

      case 'year_month_day': {
        date = `${year}_${month}_${day}`;
        break;
      }

      case 'object': {
        date = { day, month, year };
        break;
      }

      case 'iso': {
        date = new Date(`${day}-${month}-${year}`).toISOString();
        break;
      }

      default: {
        break;
      }
    }
  }

  return date;
}

module.exports = getDate;