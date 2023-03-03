const { default: expect } = require('expect');
const {fizzBuzzer, fizzBuzzerCase} = require('../fizzBuzz');

test('El clasico FizzBuzz.\nDivisible de 3 -> Fizz\nDivisible de 5-> Buzz\nDivisble entre los dos -> FizzBuzz\nNo es divisible entre ninguno -> Parametro',()=>{
    expect(fizzBuzzer(3)).toBe('Fizz');
    expect(fizzBuzzer(5)).toBe('Buzz');
    expect(fizzBuzzer(15)).toBe('FizzBuzz');
    expect(fizzBuzzer(7)).toBe(7);
})

