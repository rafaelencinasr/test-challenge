const { default: expect } = require('expect');
const {canonDNA} = require('../dna'); 

test('Recibe una cadena de ADN y regresa una cadena con solo los valores canonicos',()=>{
    expect(canonDNA('TestCTAGGAAdsasdCctatat')).toBe('TCTAGGAAC');
});
test('Recibe una cadena vacia y regresa una cadena vacia',()=>{
    expect(canonDNA('')).toBe('');
});
test('Recibe una cadena de ADN, elimina solo los valores "c, t, a,  g" solo si son minusculas',()=>{
    expect(canonDNA('CCCCCCTcccccttttaagggCCCC')).toBe('CCCCCCTCCCC');
});