// this method returns a date as a string formatted as DD/MM/YYYY
export function formatDate(date: Date) : string{
    return [
        date.getDate().toString().padStart(2, "0"),
        (date.getMonth() + 1).toString().padStart(2, "0"),
        date.getFullYear(),
      ].join("/");
}

// this method returns a date from a string formatted as DD/MM/YYYY
export function formatString(string: string): Date {
  return new Date(string.slice(3, 5).concat("/", string.slice(0, 2), "/", string.slice(6, 10)));
}