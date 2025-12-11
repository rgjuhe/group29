jest.mock("../materials_from_course/src/isObject", () => jest.fn());
jest.mock("../materials_from_course/src/isSymbol", () => jest.fn());

import isObject from "../materials_from_course/src/isObject";
import isSymbol from "../materials_from_course/src/isSymbol";
import toNumber from "../materials_from_course/src/toNumber";

describe("should return numerical values as they are", () => {
    
    test("should return integer as integer", () => {
        isObject.mockReturnValue(false);
        isSymbol.mockReturnValue(false);
        expect(toNumber(3)).toBe(3);
    });

    test("should return float as float", () => {
        isObject.mockReturnValue(false);
        isSymbol.mockReturnValue(false);
        expect(toNumber(3.2)).toBe(3.2);
    });

    test("should return 0 as 0", () => {
        isObject.mockReturnValue(false);
        isSymbol.mockReturnValue(false);
        expect(toNumber(0)).toBe(0);
    });

    test("should return negative integer as negative integer", () => {
        isObject.mockReturnValue(false);
        isSymbol.mockReturnValue(false);
        expect(toNumber(-23)).toBe(-23);
    });

});

describe("should return symbol as NaN", () => {
    
    test("should return symbol as NaN", () => {
        isObject.mockReturnValue(false);
        isSymbol.mockReturnValue(true);
        expect(toNumber(Symbol())).toBe(NaN);
    });

});

describe("should return correct values for objects", () => {
    
    test("should return object as NaN", () => {
        isObject.mockReturnValue(true);
        isSymbol.mockReturnValue(false);
        expect(toNumber({'a': 3, 'b': 4})).toBe(NaN);
    });

    test("should return array with multiple values as NaN", () => {
        isObject.mockReturnValue(true);
        isSymbol.mockReturnValue(false);
        expect(toNumber([2, 3, 4])).toBe(NaN);
    });

    test("should return array with one value as that value", () => {
        isObject.mockReturnValue(true);
        isSymbol.mockReturnValue(false);
        expect(toNumber([4])).toBe(4);
    });

});

describe("should return correct values for strings", () => {
    
    test("should return string with numerical value as the value", () => {
        isObject.mockReturnValue(false);
        isSymbol.mockReturnValue(false);
        expect(toNumber("3.4")).toBe(3.4);
    });

    test("should return any other string as NaN", () => {
        isObject.mockReturnValue(false);
        isSymbol.mockReturnValue(false);
        expect(toNumber("hello")).toBe(NaN);
    });

    test("should return any other string as NaN", () => {
        isObject.mockReturnValue(false);
        isSymbol.mockReturnValue(false);
        expect(toNumber("[1]")).toBe(NaN);
    });

});

describe("should return Infinity", () => {
    
    test("should return Infinity as Infinity", () => {
        isObject.mockReturnValue(false);
        isSymbol.mockReturnValue(false);
        expect(toNumber(Infinity)).toBe(Infinity);
    });

    test("should return -Infinity as -Infinity", () => {
        isObject.mockReturnValue(false);
        isSymbol.mockReturnValue(false);
        expect(toNumber(-Infinity)).toBe(-Infinity);
    });

});

describe("should return correct values for binary, octal and hexadecimal numbers", () => {
    
    test("should return octal as integer", () => {
        isObject.mockReturnValue(false);
        isSymbol.mockReturnValue(false);
        expect(toNumber(0o10)).toBe(8);
    });

    test("should return binary as integer", () => {
        isObject.mockReturnValue(false);
        isSymbol.mockReturnValue(false);
        expect(toNumber(0b00000010)).toBe(2);
    });

    test("should return hexadecimal as integer", () => {
        isObject.mockReturnValue(false);
        isSymbol.mockReturnValue(false);
        expect(toNumber(0xFF)).toBe(255);
    });

});