const { default: expect } = require('expect');
const {fizzBuzzer, fizzBuzzerCase} = require('../fizzBuzz');

// Fizz 
test('El clasico FizzBuzz. Divisible de 3 -> Fizz',()=>{
    expect(fizzBuzzer(3)).toBe('Fizz');
    expect(fizzBuzzer(6)).toBe('Fizz');
    expect(fizzBuzzer(9)).toBe('Fizz');
});

// Buzz
test('El clasico FizzBuzz. Divisible de 5-> Buzz',()=>{
    expect(fizzBuzzer(5)).toBe('Buzz');
    expect(fizzBuzzer(10)).toBe('Buzz');
});

// FizzBuzz
test('El clasico FizzBuzz. Divisble entre los dos -> FizzBuzz',()=>{
    expect(fizzBuzzer(15)).toBe('FizzBuzz');
    expect(fizzBuzzer(30)).toBe('FizzBuzz');
});

// Numero no divisible -> num
test('El clasico FizzBuzz. No es divisible entre ninguno -> Parametro de entrada',()=>{
    expect(fizzBuzzer(7)).toBe(7);
    expect(fizzBuzzer(13)).toBe(13);
    expect(fizzBuzzer(17)).toBe(17);
});



