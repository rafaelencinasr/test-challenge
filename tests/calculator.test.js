const { sum, substract, multiply, divide, power } = require('../calculator');

// const calculator = require('../calculator');

test('Suma a + b', () => {
    //
    expect(sum(5, 4)).toBe(9);
})

test('Resta a - b', () => {
   //
   expect(substract(5, 4)).toBe(1);
})

test('Multiplica a * b', () => {
    //
    expect(multiply(5, 4)).toBe(20);
})

test('Divide a / b', () => {
    // Consider decimals
    expect(divide(25, 5)).toBe(5);
    expect(divide(5, 4)).toBe(5/4);
})

test('Eleva a "a" a la potencia "b": a ^ b', () => {
    //
    expect(power(5, 4)).toBe(625);
})

