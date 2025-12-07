import at from '../materials_from_course/src/at';
import baseAt from '../materials_from_course/src/.internal/baseAt.js';
jest.mock('../materials_from_course/src/.internal/baseAt.js', () => jest.fn());

describe('should return correct value for object without arrays', () => {
  const object = { 'a': { 'b': 1 } };
  test("should return [1] for ['a.b']", () => {  
    baseAt.mockReturnValue([1]);
    expect(at(object, ['a.b'])).toEqual([1]);
  });
  test("should return [1, {'b':1}] for ['a.b', 'a']", () => {
    baseAt.mockReturnValue([1, {'b': 1}]);
    expect(at(object, ['a.b', 'a'])).toEqual([1, {'b': 1}]);
  });
});

describe('should return correct value for object with arrays', () => {
  const object = { 'a': [{ 'b': 1 }, 2, {'c': [3, {'d': 4}]} ]};
  test("should return [1] for ['a[0].b'] ", () => {
    baseAt.mockReturnValue([1]);
    expect(at(object, ['a[0].b'])).toEqual([1]);
  });
  test("should return [3,4] value for ['a[2].c[0]', 'a[2].c[1].d']", () => {   
    baseAt.mockReturnValue([3,4]);
    expect(at(object, ['a[2].c[0]', 'a[2].c[1].d'])).toEqual([3,4]);  
  });
});

describe("should return correct value for arrays complicated objects", () => {
  const object = [[1, [2, [3,4]]], 'testText', {'a':[5,6]}];
  test("should return [4,'T',5] for ['0[1][1][1]','1[4]','2.a[0]']", () => {
    baseAt.mockReturnValue([4,'T',5]);
    expect(at(object, ['0[1][1][1]','1[4]','2.a[0]'])).toEqual([4,'T',5]);
  });
});

describe("should return undefined for wrong type of parameter", () => {
  const object = {'a': { 'b': 1}};
  test("should return undefined for path that isn't array", () => {
    baseAt.mockReturnValue([undefined]);
    expect(at(object, 1)).toEqual([undefined]);
  });
  test("should return undefined for first parameter not being text", () => {
    baseAt.mockReturnValue([undefined]);
    expect(at(100, ['1'])).toEqual([undefined]);
  });
});


describe('should return undefined for invalid path', () => {
  const object = {'a': [{ 'b': 1}, 2, {'c': [3, {'d': 4}]}]};
  test('should return undefined for non-existing property', () => {
    baseAt.mockReturnValue([undefined]);
    expect(at(object, ['c'])).toEqual([undefined]);
  });
    test('should return undefined for negative array index', () => {
    baseAt.mockReturnValue([undefined]);
    expect(at(object, ['a[-1]'])).toEqual([undefined]);
  });
});