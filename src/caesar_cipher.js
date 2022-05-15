export default function caesarCipher(str, shift) {
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let newArray = [];
  // Split given String
  const splitString = str.toLowerCase().split('');
  // Loop Through given String
  for (let i = 0; i < splitString.length; i++) {
    // Loop through alphabet string
    for (let j = 0; j < alphabet.length; j++) {
      // Check for equality between string letter and alphabet letter
      if (splitString[i] === alphabet[j]) {
        // Check whether chosen letter is > or < shift numbers
        if (alphabet.indexOf(alphabet[j]) >= shift) {
          // Push letter into array with a new index of the shift amount
          newArray.push(alphabet[alphabet.indexOf(alphabet[j]) + shift])
        } else if (alphabet.indexOf(alphabet[j]) <= shift) {
          // Push letter into array with a new index of the shift amount
          newArray.push(alphabet[alphabet.indexOf(alphabet[j]) - shift])
        }
      }
    }
  }
  return newArray.join('');
}
