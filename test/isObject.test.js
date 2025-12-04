import isObject from '../materials_from_course/src/isObject';

describe('isObject function', () => {
  test('should return true for objects and funtions', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({'a': null})).toBe(true);
    expect(isObject([1,2,3])).toBe(true);
    expect(isObject((item) => item+1 )).toBe(true);
  });
  test('should return false for non object or funtion inputs', () => {
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
  });
});
