const calculadora = require("../models/calculadora.js");

test("somar", () => {
  const result = calculadora.somar(2, 2);
  expect(result).toBe(4);
});

test("somar string e number", () => {
  const result = calculadora.somar("nome", 2);
  expect(result).toBe("Error");
});
