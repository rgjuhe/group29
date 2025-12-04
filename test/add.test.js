import add from '../materials_from_course/src/add';

describe('add function', () => {
  test('should add two numbers correctly', () => {
    expect(add(1,2)).toBe(3);
    expect(add(-1,2)).toBe(1);
    expect(add(-1,-2)).toBe(-3);
  });
  test('should return handle undefined inputs', () => {
    expect(add(undefined,undefined)).toBe(0);
    expect(add(1,undefined)).toBe(1);
    expect(add(undefined,1)).toBe(1);
  });
  test('should return NaN with wrong type of input', () => {
    expect(add('1','2')).toBe(NaN);
    expect(add('a',2)).toBe(NaN);
    expect(add(1,'b')).toBe(NaN);
  });
});
