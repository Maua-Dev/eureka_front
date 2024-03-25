export function stringToLocaleDate(date: string): Date {
  const deliveryDateUTC = new Date(Date.parse(date));
  return new Date(
    deliveryDateUTC.getUTCFullYear(),
    deliveryDateUTC.getUTCMonth(),
    deliveryDateUTC.getUTCDate()
  );
}
