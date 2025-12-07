import isObject from '../materials_from_course/src/isObject';

describe("should return true for objects and funtions", () => {
  test("should return true for epmty object {}", () => {
    expect(isObject({})).toBe(true);
  });
  test("should return true for object {'a': null}", () => {
    expect(isObject({'a': null})).toBe(true);
  });
  test("should return true for array [1,2,3]", () => {
    expect(isObject([1,2,3])).toBe(true);
  });
  test("should return true for function ((item) => item+1 ))", () => {
   expect(isObject((item) => item+1 )).toBe(true);
  });
  test("should return true for string created with new", () => {
   expect(isObject(new String('text'))).toBe(true);
  });
  test("should return true for number created with new", () => {
   expect(isObject(new Number(1))).toBe(true);
  });
  
});

describe('should return false for non object or funtion inputs', () => {
  test('should return false for (null)', () => {
    expect(isObject(null)).toBe(false);
  });
  test('should return false for number 5', () => {
    expect(isObject(5)).toBe(false);
  });
  test("should return false for string 'text'", () => {
    expect(isObject('text')).toBe(false);
  });
  test('should return false for boolean (true)', () => {
    expect(isObject(true)).toBe(false);
  });
  test("should return false for symbol 'a'", () => {
    expect(isObject(Symbol('a'))).toBe(false);
  });
});
