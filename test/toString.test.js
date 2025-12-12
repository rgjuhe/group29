jest.mock("../materials_from_course/src/isSymbol", () => jest.fn());
import toString from "../materials_from_course/src/toString";
import isSymbol from "../materials_from_course/src/isSymbol";

describe("should return any string value back as it is", () => {

    test("should return hello for hello", () => {
        isSymbol.mockReturnValue(false);
        expect(toString("hello")).toBe("hello");
    });

    test("should return null as empty string", () => {
        isSymbol.mockReturnValue(false);
        expect(toString(null)).toBe("");
    });

});

describe("should return array values as string, where values are separated by comma", () => {

    test("should return array of different element types as string", () => {
        isSymbol.mockReturnValue(false);
        expect(toString([1, 2, "hello", 5])).toBe("1,2,hello,5");
    });

    test("should return array with same elements as string", () => {
        isSymbol.mockReturnValue(false);
        expect(toString([1, 2, 31, 5])).toBe("1,2,31,5");
    });

    test("should return array with null as string where null is an empty value", () => {
        isSymbol.mockReturnValue(false);
        expect(toString([1, null, "hi", 32])).toBe("1,,hi,32");
    });
});

describe("should return symbol as string", () => {

    test("should return symbol as string", () => {
        isSymbol.mockReturnValue(true);
        const symbol1 = Symbol("hello");
        expect(toString(symbol1)).toBe("Symbol(hello)");
    });

});

describe("should return number as string", () => {

    test("should return positive integer as string", () => {
        isSymbol.mockReturnValue(false);
        expect(toString(1205)).toBe("1205");
    });

    test("should return negative integer as string", () => {
        isSymbol.mockReturnValue(false);
        expect(toString(-1205)).toBe("-1205");
    });

    test("should return -0 as string", () => {
        isSymbol.mockReturnValue(false);
        expect(toString(-0)).toBe("-0");
    });

    test("should return float as string", () => {
        isSymbol.mockReturnValue(false);
        expect(toString(34.2)).toBe("34.2");
    });

});

describe("should return object as a string", () => {

    test("should return object as a string", () => {
        isSymbol.mockReturnValue(false);
        const randomObject = {"hello": 1, "hi": 50};
        expect(toString(randomObject)).toBe("{hello: 1, hi: 50}");
    });

});


