const calculadora = require('../../models/calculadora');

test('soma 2 + 2 para ser igual a 4', () => {
  const resultado = calculadora.somar(2, 3);
  expect(resultado).toBe(5);
});

test('soma 5 + 100 para ser igual a 105', () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("soma banana + 100 deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});