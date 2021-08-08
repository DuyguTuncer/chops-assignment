const chop = require('./chop');

test('Run the test with different data types', () => {
  expect(chop("heyyyooooo", {})).toBe("yyyooo");
});

test('Run the test with different data types', () => {
  expect(chop(2, {})).toBe("wrong data type");
});

test('Run the test with different data types', () => {
  expect(chop("heyyyooooo", null)).toBe("wrong data type");
});