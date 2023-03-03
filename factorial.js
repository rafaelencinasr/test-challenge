// Programa para calcular el factorial de un
// numero usando recursion

function factorial(number){
    if(number<=1){
        return 1;
    }else{
        return number*factorial(number-1);
    }
}

module.exports = {factorial}
// console.log(factorial(5)); //120
// console.log(factorial(6));  //720