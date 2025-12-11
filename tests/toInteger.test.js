jest.mock("../materials_from_course/src/toFinite", () => jest.fn());

import toFinite from "../materials_from_course/src/toFinite";
import toInteger from "../materials_from_course/src/toInteger";


describe("should return 0 for non-convertable values", () => {
    
    test("should return 0 for symbol", () => {
        toFinite.mockReturnValue(0);
        expect(toInteger(Symbol())).toBe(0);
    });

    test("should return 0 for object", () => {
        toFinite.mockReturnValue(0);
        expect(toInteger({'a': 2, 'b': 31})).toBe(0);
    });

});

describe("should return integer for floats and integers", () => {
    
    test("should return 4 for 4", () => {
        toFinite.mockReturnValue(4);
        expect(toInteger(4)).toBe(4);
    });

    test("should return 4 for 4.5", () => {
        toFinite.mockReturnValue(4.5);
        expect(toInteger(4.5)).toBe(4);
    });

});

describe("should return 0 or some value for strings", () => {
    
    test("should return 4 if string is 4.5", () => {
        toFinite.mockReturnValue(4.5);
        expect(toInteger("4.5")).toBe(4);
    });

    test("should return 0 if string is some non-numerical value", () => {
        toFinite.mockReturnValue(0);
        expect(toInteger("hello")).toBe(0);
    });

    test("should return 4 if string is 4", () => {
        toFinite.mockReturnValue(4);
        expect(toInteger("4")).toBe(4);
    });

});

describe("should return min or max integer value for infinity and -infinity", () => {

    test("should return 1.7976931348623157e+308 for Infinity", () => {
        toFinite.mockReturnValue(1.7976931348623157e+308);
        expect(toInteger(Infinity)).toBe(1.7976931348623157e+308);
    });

    test("should return -1.7976931348623157e+308 for -Infinity", () => {
        toFinite.mockReturnValue(-1.7976931348623157e+308);
        expect(toInteger(-Infinity)).toBe(-1.7976931348623157e+308);
    });

});
