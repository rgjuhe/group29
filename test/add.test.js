const mockCreateMathOperation = jest.fn();

jest.mock('../materials_from_course/src/.internal/createMathOperation.js', () => ({
  __esModule: true,
  default: mockCreateMathOperation
}));

describe("should add two integers correctly", () => {
  let add;
  beforeAll( () => {
    jest.resetModules();
    mockCreateMathOperation.mockImplementation( (callBack, defaultValue) => {
      return (a,b) => {
        return callBack(a,b);
      };
    });
    add = require('../materials_from_course/src/add').default;
  });
  test("should return 3 with input (1,2)", () => {
    expect(add(1,2)).toBe(3);
  });
  test("should return 0 with input (-1,1)", () => {
    expect(add(-1,1)).toBe(0);
  });
  test("should return -3 with input (-1,-2)", () => {
    expect(add(-1,-2)).toBe(-3);
  });
  // Expected results need further consideration
  test("should return MAX_VALUE with input (MAX_VALUE,1)", () => {
    const x = Number.MAX_VALUE;
    expect(add(x,1)).toEqual(x);
  });
  test("should return 0 with input (MAX_VALUE,-MAX_VALUE)", () => {
    const x = Number.MAX_VALUE + 1;
    expect(add(x,-x)).toEqual(0);
  });
});

describe("should add two decimal numbers correctly", () => {
  let add;
  beforeAll( () => {
    jest.resetModules();
    mockCreateMathOperation.mockImplementation( (callBack, defaultValue) => {
      return (a,b) => {
        return callBack(a,b);
      };
    });
    add = require('../materials_from_course/src/add').default;
  });
  test("should return 1 with input (.25,.75)", () => {
    expect(add(.25,.75)).toBe(1);
  });
  test("should return 0 with input (-.25,.25)", () => {
    expect(add(-.25,.25)).toBe(0);
  });
  // Expected results need further consideration
  test("should return MIN_VALUE with input (MIN_VALUE,MIN_VALUE)", () => {
    const x = Number.MIN_VALUE;
    expect(add(x,x)).toBe(2*x);
  });
  test("should return 0 with input (MIN_VALUE,-MIN_VALUE)", () => {
    const x = Number.MIN_VALUE;
    expect(add(x,-x)).toBe(0);
  });
});

describe("should handle undefined inputs", () => {
  let add;
  beforeAll( () => {
    jest.resetModules();
    mockCreateMathOperation.mockImplementation( (callBack, defaultValue) => {
      return (a,b) => {
        return (a == null && b == null) ? 0 :
               (a == null) ? b : a;
      };
    });
    add = require('../materials_from_course/src/add').default;
  });
  test("should return 0 for (undefined,null)", () => {
    expect(add(undefined,null)).toBe(0);
  });
  test("should return 1 for (undefined,1)", () => {
    expect(add(undefined,1)).toBe(1);
  });
  test("should return 1 for (1,null)", () => {
    expect(add(1,null)).toBe(1);
  });
});

describe("should return NaN with wrong type of input", () => {
  let add;
  beforeAll( () => {
    jest.resetModules();
    mockCreateMathOperation.mockImplementation( (callBack, defaultValue) => {
      return (a,b) => {
        if (typeof a === 'string' && typeof b === 'string') {
          return a + b;
        }
        return 0;
      };
    });
    add = require('../materials_from_course/src/add').default;
  });
  test("should return NaN for (true,false)", () => {
    expect(add(true,false)).toBe(NaN);
  });
  test("should return NaN for ('1','2')", () => {
    expect(add('1','2')).toBe(NaN);
  });
});
