import every from '../materials_from_course/src/every';

describe('every function', () => {
  test('should return true for empty array', () => {
    expect(every([], Boolean)).toBe(true);
  });
  test('should return true when all items fulllfil predicate', () => {
    expect(every([-10,4], ((item) => item < 5) )).toBe(true);
    expect(every([2,4,6,], ((item) => item%2 == 0) )).toBe(true);
  });
  test("should return false when some item doesn't items fulllfil predicate", () => {
    expect(every([-10,5], ((item) => item < 5) )).toBe(false);
    expect(every([2,4,5], ((item) => item%2 == 0) )).toBe(false);
  });
  test("should return false when some item don't fit predicate type", () => {
    expect(every([undefined,5], ((item) => item < 5) )).toBe(false);
    expect(every([2,4,5], ((item) => item.length ) )).toBe(false);
  });
});
