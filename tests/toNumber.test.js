jest.mock("../materials_from_course/src/isObject", () => jest.fn());
jest.mock("../materials_from_course/src/isSymbol", () => jest.fn());

import isObject from "../materials_from_course/src/isObject";
import isSymbol from "../materials_from_course/src/isSymbol";
import toNumber from "../materials_from_course/src/toNumber";


test("turns arguments into numerical values if possible", () => {
    isObject.mockReturnValue(false);
    isSymbol.mockReturnValue(false);

    // Testing with integer and float values.
    expect(toNumber(3)).toBe(3);
    expect(toNumber(3.2)).toBe(3.2);
    expect(toNumber(0)).toBe(0);
    expect(toNumber(-23)).toBe(-23);

    // Testing with symbol
    isSymbol.mockReturnValue(true);
    expect(toNumber(Symbol())).toBe(NaN);

    // Testing with objects
    isSymbol.mockReturnValue(false);
    isObject.mockReturnValue(true);
    expect(toNumber({'a': 3, 'b': 4})).toBe(NaN);
    expect(toNumber([2, 3, 4])).toBe(NaN);
    expect(toNumber([4])).toBe(4);
    isObject.mockReturnValue(false);

    // Testing with strings
    expect(toNumber("3.4")).toBe(3.4);
    expect(toNumber("hello")).toBe(NaN);

    // Testing with infinity
    expect(toNumber(Infinity)).toBe(Infinity);
    expect(toNumber(-Infinity)).toBe(-Infinity);

    // Testing with octal, binary and hexadecimal values
    expect(toNumber(0o10)).toBe(8);
    expect(toNumber(0b00000010)).toBe(2);
    expect(toNumber(0xFF)).toBe(255);
    
});