const add = require('../src/simple_test_function');

describe('add function', () => {
  test('should correctly add two numbers', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });
});

describe('testcase fail', () => {
  test('tests should fail', () => {
    expect(add(1, 2)).toBe(5);
    expect(add(-1, 1)).toBe(5);
    expect(add(0, 0)).toBe(5);
  });
});