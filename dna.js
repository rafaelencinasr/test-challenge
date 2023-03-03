
// Funcion para eliminar valores no canonicos de una cadena de ADN
function canonDNA (string){
    // Se separa cada caracter de la cadena en un arreglo 
    let dnaArray = string.split('');

    // Se filtra el arreglo regresando solo los elementos si son C, T, A, o G
    let filteredDNA = dnaArray.filter(letras => letras==='C'||(letras==='T'||(letras==='A'||letras==='G')));

    // Se regresa el arreglo convertido en string con .join
    return filteredDNA.join('');
}

module.exports = {canonDNA};

/* console.log(canonDNA('testCTAGGAAdsasdCctatat'));
console.log(canonDNA(''));
console.log(canonDNA('CCCCCCTcccccttttaagggCCCC')); */