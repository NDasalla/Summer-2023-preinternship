const factorial = require("./factorial");

describe("factorial(n) returns the factorial of n", () => {
  test("factorial(0) => 1", () => {
    expect(factorial(0)).toEqual(1);
  });

  test("factorial(1) => 1", () => {
    expect(factorial(1)).toEqual(1);
  });

  test("factorial(5) => 120", () => {
    expect(factorial(5)).toEqual(120);
  });
});
