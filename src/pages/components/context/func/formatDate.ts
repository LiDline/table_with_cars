export default function formatDate(date: Date) {
  const day =
    date.getDate() < 10 ? "0" + String(date.getDate()) : String(date.getDate());

  const month =
    date.getMonth() + 1 < 10
      ? "0" + String(date.getMonth() + 1)
      : String(date.getMonth() + 1);

  const year = date.getFullYear();

  const hours =
    date.getHours() < 10
      ? "0" + String(date.getHours())
      : String(date.getHours());

  const minutes =
    date.getMinutes() < 10
      ? "0" + String(date.getMinutes())
      : String(date.getMinutes());

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}
