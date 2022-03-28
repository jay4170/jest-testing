const sum = (a, b) => {
  if (Number.isInteger(a) & Number.isInteger(b)) {
    return a + b;
  } else {
    return "Not a number";
  }
};
const sub = (a, b) => {
  if (Number.isInteger(a) & Number.isInteger(b)) {
    return a - b;
  } else {
    return "Not a number";
  }
};
const div = (a, b) => {
  if (a == 0 || b == 0) {
    return "You can't divide by 0";
  } else if (Number.isInteger(a) & Number.isInteger(b)) {
    return a / b;
  } else {
    return "Not a number";
  }
};
const mul = (a, b) => {
  if (Number.isInteger(a) & Number.isInteger(b)) {
    return a * b;
  } else {
    return "Not a number";
  }
};

const calculator = { sum: sum, sub: sub, div: div, mul: mul };

const capitalise = (a) => {
  return a.charAt(0).toUpperCase() + a.slice(1);
};

const reverseString = (string) => {
  if (typeof string != "string") {
    return "This isn't a string";
  }

  let reversedString = "";
  for (let index = string.length - 1; index >= 0; index--) {
    reversedString += string.charAt(index);
  }

  return reversedString;
};

const ceasarCipher = (string, cipher) => {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let cipheredWord = "";
  //for each letter
  for (let index = 0; index < string.length; index++) {
    //find which number in the array it is
    let currentLetter = string.charAt(index);
    if (alphabet.includes(currentLetter.toUpperCase())) {
      for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i] == currentLetter.toUpperCase()) {
          let rotation = i + cipher;
          if (rotation >= 26) {
            rotation = rotation - 26;
          }

          cipheredWord += alphabet[rotation];
        }
      }
      
    } else cipheredWord += currentLetter;
  }

  return cipheredWord;
};

exports.reverseString = reverseString;
exports.calculator = calculator;
exports.capitalise = capitalise;
exports.ceasarCipher = ceasarCipher;
