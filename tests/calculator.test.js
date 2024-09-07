import calculator from "../code/calculator";
// testing addition function
test("calculator addition feature", () => {
  let a = 1;
  let b = 2;
  expect(calculator.add(a, b)).toBe(3);
});
test("calculator adding  two floats feature", () => {
  let a = 0.3;
  let b = 0.2;
  expect(calculator.add(a, b)).toBeCloseTo(0.5);
});
test("calculator adding negatives feature", () => {
  let a = -2;
  let b = -5;
  expect(calculator.add(a, b)).toBe(-7);
});
test("calculator adding one negative integer, one positive integer feature", () => {
  let a = -2;
  let b = 5;
  expect(calculator.add(a, b)).toBe(3);
});
// testing subtraction function
test("calculator subtraction", () => {
  let a = 5;
  let b = 2;
  expect(calculator.subtract(a, b)).toBe(3);
});
test("calculator subtraction where first integer less than second interger", () => {
  let a = 1;
  let b = 2;
  expect(calculator.subtract(a, b)).toBe(-1);
});
test("calculator subtracting  two floats feature", () => {
  let a = 0.3;
  let b = 0.2;
  expect(calculator.subtract(a, b)).toBeCloseTo(0.1);
});
test("calculator subtracting negatives feature", () => {
  let a = -2;
  let b = -5;
  expect(calculator.subtract(a, b)).toBe(3);
});
test("calculator subtracting one negative integer, one positive integer feature", () => {
  let a = -2;
  let b = 5;
  expect(calculator.subtract(a, b)).toBe(-7);
});
// testing division function
test("calculator division", () => {
  let a = 6;
  let b = 2;
  expect(calculator.divide(a, b)).toBe(3);
});
test("calculator division where first integer less than second interger", () => {
  let a = 1;
  let b = 2;
  expect(calculator.divide(a, b)).toBeCloseTo(0.5);
});
test("calculator dividing  two floats feature", () => {
  let a = 0.6;
  let b = 0.2;
  expect(calculator.divide(a, b)).toBeCloseTo(3);
});
test("calculator dividing negatives feature", () => {
  let a = -20;
  let b = -5;
  expect(calculator.divide(a, b)).toBe(4);
});
test("calculator dividing one negative integer, one positive integer feature", () => {
  let a = -20;
  let b = 5;
  expect(calculator.divide(a, b)).toBe(-4);
});
test("calculator dividing one negative integer, one positive integer feature", () => {
  let a = -20;
  let b = 5;
  expect(calculator.divide(a, b)).toBe(-4);
});
test("calculator dividing by zero", () => {
  let a = 5;
  let b = 0;
  expect(()=>calculator.divide(a, b)).toThrow(/Math Error/);
});
// testing multiplication function
// testing division function
test("calculator multiplication", () => {
  let a = 6;
  let b = 2;
  expect(calculator.multiply(a, b)).toBe(12);
});

test("calculator multiplying two floats", () => {
  let a = 0.6;
  let b = 0.2;
  expect(calculator.multiply(a, b)).toBeCloseTo(0.12);
});
test("calculator multiplying negative integers", () => {
  let a = -20;
  let b = -5;
  expect(calculator.multiply(a, b)).toBe(100);
});
test("calculator multiplying one negative integer, one positive integer", () => {
  let a = -20;
  let b = 5;
  expect(calculator.multiply(a, b)).toBe(-100);
});

test("calculator multiplying by zero", () => {
  let a = 5;
  let b = 0;
  expect(calculator.multiply(a, b)).toBe(0);
});