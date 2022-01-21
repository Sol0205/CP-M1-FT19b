const {Stack} = require("../DS");
/* eslint-disable no-undef */
const {
  reverseWords
} = require('../checkpoint.js');

xdescribe('EJERCICIO 6: reverseWords', function() {

  /*todo: testear que se invoco un stack, testear que no se invoco reverse*/
  // var barSpy;
  // beforeEach(()=> {
  //   barSpy  = expect.spyOn(Stack.prototype, 'barModule');
  //   new Stack();
  // });

  it('Debe devolver olleH dlroW cuando invoco reverseWords con Hello World', function() {
    expect(reverseWords("Hello World")).toEqual("olleH dlroW");
  });

  it('Debe devolver olleH dlroW cuando invoco reverseWords con Hello World', function() {
    expect(reverseWords("There is a little monkey")).toEqual("erehT si a elttil yeknom");
  });
});
