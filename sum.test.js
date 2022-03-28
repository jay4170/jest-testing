const { test, expect } = require("@jest/globals");
const exp = require("constants");
const { calculator } = require("./index");
const { capitalise } = require("./index");
const { reverseString } = require("./index");
const { ceasarCipher } = require("./index");
///sum tests
test("adds 1 to 8 to equal 9", () => {
  expect(calculator.sum(1, 8)).toBe(9);
});
test("adds negative numbers", () => {
  expect(calculator.sum(1, -8)).toBe(-7);
});
test("Ensure integers are used", () => {
  expect(calculator.sum(2, "a")).toBe("Not a number");
});
//sub tests
test("Subs 8 from 1 to equal -7", () => {
  expect(calculator.sub(1, 8)).toBe(-7);
});
test("Ensure integers are used", () => {
  expect(calculator.sub(2, "a")).toBe("Not a number");
});
//div tests
test("10 divided by 5", () => {
  expect(calculator.div(10, 5)).toBe(2);
});
test("Ensure integers are used", () => {
  expect(calculator.div(2, "a")).toBe("Not a number");
});
test("Cant divide by 0", () => {
  expect(calculator.div(10, 0)).toBe("You can't divide by 0");
});
//mul tests
test("2 times 18 is 36", () => {
  expect(calculator.mul(2, 18)).toBe(36);
});
test("Ensure integers are used", () => {
  expect(calculator.mul(2, "a")).toBe("Not a number");
});
//Capitalise tests
test("Takes a string and capitalises the first letter", () => {
  expect(capitalise("cat")).toBe("Cat");
});
test("Works if first letter already capitalised", () => {
  expect(capitalise("DOG")).toBe("DOG");
});

//Reverse string tests
test("Takes cat and returns tac", () => {
  expect(reverseString("cat")).toBe("tac");
});
test("Returns an error if not a string", () => {
  expect(reverseString(1)).toBe("This isn't a string");
});

//ceasar cypher tests
test("Takes dog and moves it 1 digit up the alphabet eph", () => {
  expect(ceasarCipher("dog", 1)).toBe("EPH");
});
test("Works with letters at the end of the alphabet", () => {
  expect(ceasarCipher("zzz", 1)).toBe("AAA");
});
test("Works with punctuation", () => {
  expect(ceasarCipher("c*t", 1)).toBe("D*U");
});
