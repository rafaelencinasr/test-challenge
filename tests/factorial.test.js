const { default: expect } = require('expect');
const {factorial} = require('../factorial');

test('Calcula el factorial de un numero',()=>{
    expect(factorial(5)).toBe(120);
    expect(factorial(6)).toBe(720);
    expect(factorial(0)).toBe(1);
    
})
