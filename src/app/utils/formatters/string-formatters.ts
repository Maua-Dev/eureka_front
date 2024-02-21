export function stringCapitalize(string: string): string {
  return string.toLowerCase().replace(/(?:^|\s)\S/g, function (char) {
    return char.toUpperCase();
  });
}
