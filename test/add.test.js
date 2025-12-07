
import add from '../materials_from_course/src/add';

describe('add function', () => {
  test('should add two numbers correctly', () => {
    expect(add(1,2)).toBe(3);
  });
  test('should add two numbers correctly', () => {
    expect(add(1,1)).toBe(3);
  });
});
