const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds "sveikas" + 2 to equal ERROR', () => {
    expect(sum('sveikas', 2)).toBe('Error');
  });

test('adds Infinity + 2 to equal ERROR', () => {
    expect(sum('Infinity', 2)).toBe('Error');
});

test('adds NaN + 2 to equal ERROR', () => {
    expect(sum(NaN, 2)).toBe('Error');
});