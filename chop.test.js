const chop = require('./chop');

test('Run the test with the final result', () => {
  expect(chop("I have many things in my fridge such as {{bread}} {{focaccio}} {{salmon}} say {{hallo}}",
    { bread: "essential", salmon: "delicioussy", focaccio: "carby", hallo: "meal" })).
    toBe("I have many things in my fridge such as essential carby delicioussy say meal");
});

test('Run the test with the wrong output see the value not to be a random string', () => {
  expect(chop("I have many things in my fridge such as {{bread}} {{focaccio}} {{salmon}} say {{hallo}}",
   { bread: "essential", salmon: "delicioussy", focaccio: "carby", hallo: "meal" })).
    not.toBe("I have many things in my fridge such as essential carby");
});

test('chop returns error message when it receives null for the template argument', () => {
  expect(chop("I have many things in my fridge such as {{bread}} {{focaccio}} {{salmon}} say {{hallo}}",
   null)).
    toBe("data type of the argument does not match with the requirements");
});

test('chop returns error message when it receives an array for the template argument', () => {
  expect(chop("I have many things in my fridge such as {{bread}} {{focaccio}} {{salmon}} say {{hallo}}",
   [])).
    toBe("data type of the argument does not match with the requirements");
});

test('chop returns error message when it receives a function for the template argument', () => {
  expect(chop("I have many things in my fridge such as {{bread}} {{focaccio}} {{salmon}} say {{hallo}}",
   () => console.log("hey"))).
    toBe("data type of the argument does not match with the requirements");
});

test('chop returns error message when it receives a number for the template argument', () => {
  expect(chop("I have many things in my fridge such as {{bread}} {{focaccio}} {{salmon}} say {{hallo}}",
   2)).
    toBe("data type of the argument does not match with the requirements");
});

test('chop returns error message when it receives a number for the data argument', () => {
  expect(chop(2,
   {})).
    toBe("data type of the argument does not match with the requirements");
});


