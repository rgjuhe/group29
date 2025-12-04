jest.mock("../materials_from_course/src/toFinite", () => jest.fn());

import toFinite from "../materials_from_course/src/toFinite";
import toInteger from "../materials_from_course/src/toInteger";


test("turns strings, floats and integers into integers", () => {
    toFinite.mockReturnValue(0);

    // Testing with some values that are not convertable to integers
    expect(toInteger(Symbol())).toBe(0);
    expect(toInteger({'a': 2, 'b': 31})).toBe(0);

    // Testing with floats and strings
    toFinite.mockReturnValue(4.5);
    expect(toInteger("4.5")).toBe(4);
    expect(toInteger(4.5)).toBe(4);

    // Testing with infinity and -infinity
    toFinite.mockReturnValue(1.7976931348623157e+308);
    expect(toInteger(Infinity)).toBe(1.7976931348623157e+308);
    toFinite.mockReturnValue(-1.7976931348623157e+308);
    expect(toInteger(-Infinity)).toBe(-1.7976931348623157e+308);

});