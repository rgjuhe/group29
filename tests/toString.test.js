jest.mock("../materials_from_course/src/isSymbol", () => jest.fn());
import toString from "../materials_from_course/src/toString";
import isSymbol from "../materials_from_course/src/isSymbol";

test("converts to string", () => {
    // Setting isSymbol off so it doesn't trigger the if-clause
    isSymbol.mockReturnValue(false);

    // Testing a simple string value
    expect(toString("hello")).toBe("hello");

    // Testing both cases for array values, normal array and an array with null value
    expect(toString([1, 2, "hello", 5])).toBe("1,2,hello,5");
    expect(toString([1, null, "hi", 32])).toBe("1,,hi,32");

    // Testing with a symbol, setting the isSymbol mock function 
    // return value to true so the if-clause will go through
    isSymbol.mockReturnValue(true);
    const symbol1 = Symbol("hello");
    expect(toString(symbol1)).toBe("Symbol(hello)");

    isSymbol.mockReturnValue(false);

    // Testing with integer values, case 1 where the value is -0
    // and case 2 where the integer is more generic value
    // case 3 for a negative value
    let result = -0;
    expect(toString(result)).toBe("-0");
    
    result = 1209;
    expect(toString(result)).toBe("1209");

    result = -52;
    expect(toString(result)).toBe("-52");

    // Lastly testing with an object, which probably will 
    // not be used in any real cases
    const randomObject = {"hello": 1, "hi": 50};
    expect(toString(randomObject)).toBe("[object Object]");
});

