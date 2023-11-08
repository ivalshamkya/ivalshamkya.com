export function formatISODate(isoDate: any): string {
  const date = new Date(isoDate);

  const formattedDate = `${date.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })}`;

  return formattedDate;
}
