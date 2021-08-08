const chop = require('./chop');

// test('Run the test with different data types', () => {
//   expect(chop("heyyyooooo", {})).toBe("yyyooo");
// });

// test('Run the test with different data types', () => {
//   expect(chop(2, {})).toBe("wrong data type");
// });

// test('Run the test with different data types', () => {
//   expect(chop("heyyyooooo", null)).toBe("wrong data type");
// });

// test('Run the test with filteredData', () => {
//   expect(chop("I have many things in my fridge such as {{bread}} {{focaccio}} {{salmon}} say {{hallo}}",
//     { bread: "essential", salmon: "delicioussy", focaccio: "carby", hallo: "meal" })).
//     toBe([ '{{bread}}', '{{focaccio}}', '{{salmon}}', '{{hallo}}' ]);
// });

// test('Run the test with newArray', () => {
//   expect(chop("I have many things in my fridge such as {{bread}} {{focaccio}} {{salmon}} say {{hallo}}",
//     { bread: "essential", salmon: "delicioussy", focaccio: "carby", hallo: "meal" })).
//     toBe([
//   'I',      'have',
//   'many',   'things',
//   'in',     'my',
//   'fridge', 'such',
//   'as',     'essential',
//   'carby',  'delicioussy',
//   'say',    'meal'
// ]);
// });

test('Run the test with the final result', () => {
  expect(chop("I have many things in my fridge such as {{bread}} {{focaccio}} {{salmon}} say {{hallo}}",
    { bread: "essential", salmon: "delicioussy", focaccio: "carby", hallo: "meal" })).
    toBe("I have many things in my fridge such as essential carby delicioussy say meal");
});

test('Run the test with the wrong output', () => {
  expect(chop("I have many things in my fridge such as {{bread}} {{focaccio}} {{salmon}} say {{hallo}}",
   { bread: "essential", salmon: "delicioussy", focaccio: "carby", hallo: "meal" })).
    toBe("I have many things in my fridge such as essential carby");
});

test('Run the test with the wrong data types to see the error message', () => {
  expect(chop(2,
   { bread: "essential", salmon: "delicioussy", focaccio: "carby", hallo: "meal" })).
    toBe("data type of the argument does not match with the requirements");
});
