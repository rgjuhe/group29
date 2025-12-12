//import keys from '../materials_from_course/src/keys';
import arrayLikeKeys from '../materials_from_course/src/.internal/arrayLikeKeys.js';
import isArrayLike from '../materials_from_course/src/isArrayLike.js';

const mockArrayLikeKeys = jest.fn();
jest.mock('../materials_from_course/src/.internal/arrayLikeKeys.js', () => ({
  __esModule: true,
  default: mockArrayLikeKeys
}));
const mockIsArrayLike = jest.fn();
jest.mock('../materials_from_course/src/isArrayLike.js', () => ({
  __esModule: true,
  default: mockIsArrayLike
}));

describe("should return correct keys for arrays", () => {
  let keys;
  beforeAll( () => {
    jest.resetModules();
    mockArrayLikeKeys.mockImplementation( (value, inherited) => {
      return value.map((_, i) => String(i));
    });
    mockIsArrayLike.mockImplementation( (value) => {
      return true;
    });
    keys = require('../materials_from_course/src/keys').default;
  });
  test("should return ['0','1','2'] for ['a','b','c']", () => {
    const arr = ['a','b','c'];
    expect(keys(arr)).toEqual(["0","1","2"]);
  });
  test("should return [] for []", () => {
    const arr = [];
    expect(keys(arr)).toEqual([]);
  });
  test("should handle large arrays", () => {
    const size = 100000;
    const arr = Array.from({length: size}, (x) => x);
    const expRes = Array.from({length: size}, (_,i) => String(i));
    expect(keys(arr)).toEqual(expRes);
  });
});

describe("should return correct keys for other arrayLike inputs", () => {
  let keys;
  beforeAll( () => {
    jest.resetModules();
    mockArrayLikeKeys.mockImplementation( (value, inherited) => {
      return Array.from(value, (_, i) => String(i));
    });
    mockIsArrayLike.mockImplementation( (value) => {
      return true;
    });
    keys = require('../materials_from_course/src/keys').default;
  });
  test("should return ['0','1','2'] for string 'hey'", () => {
    const str = 'hey';
    expect(keys(str)).toEqual(["0","1","2"]);
  });
  test("should return ['0','1','2','3','4'] for Uint8Array '[0,0,0,0,0]'", () => {
    const uint8A = new Uint8Array(5);
    expect(keys(uint8A)).toEqual(["0","1","2","3","4"]);
  }); 
});

describe("Should return correct keys for objects", () => {
  let keys;
  beforeAll( () => {
    jest.resetModules();
    mockArrayLikeKeys.mockImplementation( () => {
      return;
    });
    mockIsArrayLike.mockImplementation( (value) => {
      return false;
    });
    keys = require('../materials_from_course/src/keys').default;
  });
  test("should return ['a','b','c'] for {'a': 2, 'b':1, 'c':1}", () => {
    const obj = {'a': 2, 'b':1, 'c':1};
    expect(keys(obj)).toEqual(['a','b','c']);
  });
  test("should return ['a','b','c'] for {'a': {'d': [1,2]}, 'b':1, 'c':1}", () => {
    const obj = {'a': {'d': [1,2]}, 'b':1, 'c':1};
    expect(keys(obj)).toEqual(['a','b','c']);
  });
  test("should return [] for {}", () => {
    const obj = {};
    expect(keys(obj)).toEqual([]);
  });
});

describe("Should handle undefined input", () => {
  let keys;
  beforeAll( () => {
    jest.resetModules();
    mockArrayLikeKeys.mockImplementation( () => {
      return;
    });
    mockIsArrayLike.mockImplementation( (value) => {
      return false;
    });
    keys = require('../materials_from_course/src/keys').default;
  });
  test("should return [] for null", () => {
    const obj = null;
    expect(keys(obj)).toEqual([]);
  });
  test("should return [] for undefined", () => {
    const obj = undefined;
    expect(keys(obj)).toEqual([]);
  });
});