// You already have the methods imported
const { default: expect } = require('expect');
const {getUser, getUsers} = require('../users');
const data = require('../data')


// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want
test('Verificar si getUser(id) funciona correctamente',()=>{
    expect(getUser(3)).toStrictEqual(data[2]);
})

test('Verificar si getUsers trae a todos los usuarios',()=>{
    expect(getUsers()).toStrictEqual(data);
})

// READ documentation