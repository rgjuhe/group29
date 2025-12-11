jest.mock("../materials_from_course/src/.internal/baseGet", () => jest.fn());
import baseGet from "../materials_from_course/src/.internal/baseGet";
import get from "../materials_from_course/src/get";

const object = {a: [{b: {c: 34}}, {d: [2, 3, 4]}]};

describe("should handle undefined inputs", () => {

    test("should return undefined for integer as first argument", () => {
        baseGet.mockReturnValue(undefined);
        expect(get(2, "a[0].b")).toBe(undefined);
    });

    test("should return undefined for poor path (e.a.d)", () => {
        baseGet.mockReturnValue(undefined);
        expect(get(object, "e.a.d")).toBe(undefined);
    });

    test("should return undefined for out of bounds path (a[3])", () => {
        baseGet.mockReturnValue(undefined);
        expect(get(object, "a[3]")).toBe(undefined);
    });

    test("should return undefined for negative index of path (a[-1])", () => {
        baseGet.mockReturnValue(undefined);
        expect(get(object, "a[-1]")).toBe(undefined);
    });

    test("should return undefined for null object", () => {
        baseGet.mockReturnValue(undefined);
        expect(get(null, "a[0]")).toBe(undefined);
        expect(baseGet).not.toHaveBeenCalled();
    });
});

describe("should handle default value", () => {

    test("should return default value for null object", () => {
        baseGet.mockReturnValue(undefined);
        expect(get(null, "a[0]")).toBe(undefined);
    });

    test("should return undefined default value for poor path", () => {
        baseGet.mockReturnValue(undefined);
        expect(get(object, "e.a.d")).toBe(undefined);
    });

});

describe("should return a value for correct object and path", () => {

    test("should return 34 for ", () => {
        baseGet.mockReturnValue(34);
        expect(get(object, "a[0].b.c")).toBe(34);
    });

    test("should return undefined for null object when baseGet is not undefined", () => {
        baseGet.mockReturnValue(34);
        expect(get(null, "a[0].b")).toBe(undefined);
        expect(baseGet).not.toHaveBeenCalled();
    });

});

