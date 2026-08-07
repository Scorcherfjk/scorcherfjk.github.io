const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatMonthYear(iso: string): string {
  const [year, month] = iso.split("-");
  const monthIndex = Number(month) - 1;
  const monthName = MONTHS[monthIndex] ?? iso;
  return `${monthName} ${year}`;
}

export function formatRange(
  startDate: string,
  endDate: string | null,
  current: boolean,
): string {
  const start = formatMonthYear(startDate);
  const end = current || !endDate ? "Present" : formatMonthYear(endDate);
  return `${start} — ${end}`;
}

export function formatYear(iso: string): string {
  return iso.slice(0, 4);
}
