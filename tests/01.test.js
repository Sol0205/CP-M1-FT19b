






//Franco Etcheverri:henry:  19:19
//Buenas @canal
//Fe de erratas en el ejercicio del árbol balanceado: el primer test saquen el último insert del nodo 9 porque si no no va a estar balanceado. Cualquier cosa igual me consultan si están con ese










/* eslint-disable no-undef */

const {
  newtonRaphson
} = require('../checkpoint.js');

xdescribe('EJERCICIO 1: newtonRaphson', function() {

  /*todo: testear que se la funcion recursiva se llamo n veces en cada caso*/

  it('Debería devolver -1 si newtonRaphson es invocado con un número negativo', function(){
    expect(newtonRaphson(-6, 3)).toBe(-1);
  });

  it('Debería devolver -1 si newtonRaphson es invocado con un número decimal', function(){
    expect(newtonRaphson(4.5, 3)).toBe(-1);
  });

  it('Debería devolver -1 si newtonRaphson es invocado con un número decimal negativo', function(){
    expect(newtonRaphson(-4.5, 3)).toBe(-1);
  });

  it('Debería devolver 6.708203932499369 si newtonRaphson con x=45 y count=6', function() {
    expect(newtonRaphson(45, 6)).toBe(Math.sqrt(45));
  });

  it('Debería devolver 4.47213595499958 si newtonRaphson con x=20 y count=6', function() {
    expect(newtonRaphson(20, 6)).toBe(Math.sqrt(20));
  });

  it('Debería devolver 3 si newtonRaphson con x=9 y count=5', function() {
    expect(newtonRaphson(9, 5)).toBe(Math.sqrt(9));
  });

  it('Debería devolver 23.664319132398465 si newtonRaphson con x=560 y count=9', function() {
    expect(newtonRaphson(560, 9)).toBe(Math.sqrt(560));
  });
});
