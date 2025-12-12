//import keys from '../materials_from_course/src/keys';
import arrayLikeKeys from '../materials_from_course/src/.internal/arrayLikeKeys.js';
import isArrayLike from '../materials_from_course/src/isArrayLike.js';

const mockArrayLikeKeys = jest.fn();
jest.mock('../materials_from_course/src/.internal/arrayLikeKeys.js', () => ({
  __esModule: true,
  default: mockArrayLikeKeys
}));
jest.mock('../materials_from_course/src/isArrayLike.js', () => jest.fn());

describe("should return correct keys for arrays", () => {
  let keys;
  beforeAll( () => {
    jest.resetModules();
    mockArrayLikeKeys.mockImplementation( (value, inherited) => {
      return value.map((_, i) => String(i));
    });
    keys = require('../materials_from_course/src/keys').default;
  });
  test("should return [0,1,2] for ['a','b','c']", () => {
    const arr = ['a','b','c'];
    isArrayLike.mockReturnValue(true);
    
    expect(keys(arr)).toEqual(["0","1","2"]);
  });
  test("should handle large arrays", () => {
    const size = 100000;
    const arr = Array.from({length: size}, (x) => x);
    const expRes = Array.from({length: size}, (_,i) => String(i));
    isArrayLike.mockReturnValue(true);
    expect(keys(arr)).toEqual(expRes);
  });
});

describe("Should return correct keys for simple objects", () => {
  let keys;
  keys = require('../materials_from_course/src/keys').default;
  test("", () => {
    isArrayLike.mockReturnValue(false);
    const obj = {'a': 2, 'b':1, 'c':1};
    expect(keys(obj)).toEqual(['a','b','c']);
  })
});