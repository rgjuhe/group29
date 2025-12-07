import every from '../materials_from_course/src/every';

describe("should return true when all items fulllfil predicate", () => {
  test("should return true for [-10,4] and function ((item) => item < 5)", () => {
    expect(every([-10,4], ((item) => item < 5) )).toBe(true);
  });
  test("should return true for [2,4,6] and function ((item) => item%2 == 0)", () => {
    expect(every([2,4,6,], ((item) => item%2 == 0) )).toBe(true);
  });
});

describe("should handle empty array correctly", () => {
  test("should return true for empty array", () => {
    expect(every([], Boolean)).toBe(true);
  });
});

describe("should return false when some item doesn't items fulllfil predicate", () => {
  test("should return false for [-10,5] and function ((item) => item < 5) ", () => {
    expect(every([-10,5], ((item) => item < 5) )).toBe(false);
  });
  test("should return false for [2,4,5] and function ((item) => item%2 == 0) ", () => {
    expect(every([2,4,5], ((item) => item%2 == 0) )).toBe(false);
  });
});


describe("should return false when some item's type doesn't match predicate", () => {
  test("should return false for [undefined,5] and function ((item) => item < 5) ", () => {
    expect(every([undefined,5], ((item) => item < 5) )).toBe(false);
    expect(every([2,4,5], ((item) => item.length ) )).toBe(false);
  });
  test("should return false for [2,'abc] and function ((item) => item.length) ", () => {
    expect(every([2,'abc',], ((item) => item.length ) )).toBe(false);
  });
});

describe("should return handle undefined input correctly", () => {
  test("should return true for undefined array", () => {
    expect(every(undefined, Boolean)).toBe(true);
  });
  test("should throw typeError for undefined predicate", () => {
    expect( () => {every([1,2], undefined);}).toThrow(TypeError);
  });
});
