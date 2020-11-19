export default function getDay(dateAndFormat) {
  const { date: dateStr, format: isFullTitleDay } = JSON.parse(dateAndFormat);
  const date = new Date(dateStr);

  if (isFullTitleDay) {
    return date.toLocaleString('ru-RU', {
      weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric',
    });
  }

  return date.toLocaleString('ru-RU', {
    weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric',
  });
}
