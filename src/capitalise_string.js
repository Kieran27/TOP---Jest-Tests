
export default function capitaliseString(string) {
  const regex = /^[a-z]{1}/gm;
  if (string.match(regex)) {
    const splitString = string.toLowerCase().split("");
    const conjoinedArr = [];
    for (let i = 0; i < splitString.length; i++) {
      i === 0 ? conjoinedArr.push(splitString[i].toUpperCase()) : conjoinedArr.push(splitString[i]);
    }
    return conjoinedArr.join("");
  }
  return 'not a valid string!'
}
