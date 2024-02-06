// this method returns a date from a string formatted as DD/MM/YYYY
export function stringToDate(string: string): Date {
  return new Date(string.slice(3, 5).concat("/", string.slice(0, 2), "/", string.slice(6, 10)));
}
