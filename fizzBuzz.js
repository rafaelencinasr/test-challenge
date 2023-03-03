// FizzBuzz
// Divisible de 3 -> 'Fizz'
// Divisible de 5 -> 'Buzz'
// Divisble de ambos -> 'FizzBuzz'
// Ninguno de los dos -> regresar el numero del parametro

const { number } = require("yargs");

function fizzBuzzer(number){
    let result='';
    if(number%3==0){
        result += 'Fizz';
    };
    if(number%5==0){
        result += 'Buzz';
    } else if(number%5!=0&&number%3!=0){
        result = number;
    }

    return result;
}



//Tambien se podria hacer con un switch case

/* function fizzBuzzerCase(number){
    let result = '';
    switch(true){
        case (number%3==0):
            result += 'Fizz';
        case (number%5==0):
            result += 'Buzz';
            break;
        default:
            result = number;
    }
    return result;
} */

module.exports = {fizzBuzzer};


/* console.log(fizzBuzzer(3));
console.log(fizzBuzzer(5));
console.log(fizzBuzzer(15));
console.log(fizzBuzzer(7)); */

/* console.log(fizzBuzzerCase(3));
console.log(fizzBuzzerCase(5));
console.log(fizzBuzzerCase(15));
console.log(fizzBuzzerCase(7)); */
