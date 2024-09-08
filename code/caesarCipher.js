export default function caesarCipher(string, shiftKey) {
  const stringArray = splitString(string);
  const charCodeArray = changeToCharCode(stringArray, shiftKey);
  const backToStringArray = encryptString(charCodeArray);
  return backToStringArray;
}

function splitString(string) {
  return string.split("");
}
function changeToCharCode(array, shiftKey) {
  return array.map((item) => {
    let newCharcode = item.charCodeAt(0) + shiftKey;
    if (
      (newCharcode >= 65 && newCharcode <= 90) ||
      (newCharcode >= 97 && newCharcode <= 122)
    ) {
      return newCharcode;
    } else {
      return item;
    }
  });
}
function encryptString(array) {
  return array
    .map((item) => {
      if (typeof item === "number") {
        return String.fromCharCode(item);
      } else {
        return item;
      }
    })
    .join("");
}

