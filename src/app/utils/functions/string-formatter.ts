// this method returns a string with the first letter of each word in uppercase
export function stringCapitalize(string: string): string {
  let stringCapitalized = "";
  string = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (i === 0 || string[i - 1] === " ") {
      stringCapitalized += string[i].toUpperCase();
    } else {
      stringCapitalized += string[i];
    }
  }

  return stringCapitalized;
}
