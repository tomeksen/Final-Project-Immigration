export const formatToCustomDate = (dateInput: Date | string): string => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const period = hours >= 12 ? "pm" : "am";

  return `${day} ${month} ${year}, ${formattedHours}:${minutes
    .toString()
    .padStart(2, "0")}${period}`;
};
