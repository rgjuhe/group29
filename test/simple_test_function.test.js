const add = require('../src/simple_test_function');

describe('add function', () => {
  test('should correctly add two numbers', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });
});

describe('my_test suite', () => {
  test('tests should fail 1', () => {
    expect(add(1, 2)).toBe(5);
    expect(add(-1, 1)).toBe(5);
    expect(add(0, 0)).toBe(5);
  });
  test('tests should fail 2', () => {
    expect(add(1, 2)).toBe(5);
    expect(add(-1, 1)).toBe(5);
    expect(add(0, 0)).toBe(5);
  });
});