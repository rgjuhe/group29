jest.mock("../materials_from_course/src/.internal/baseGet", () => jest.fn());
import baseGet from "../materials_from_course/src/.internal/baseGet";
import get from "../materials_from_course/src/get";


test("gets values from path of object", () => {

    const object = {a: [{b: {c: 34}}, {d: [2, 3, 4]}]};

    // Setting the baseGet mock function to undefined
    // It doesn't really matter here but the expected return value is undefined here.
    baseGet.mockReturnValue(undefined);

    // Testing with different values that should always return undefined
    expect(get(2, "a[0].b")).toBe(undefined);
    expect(get(object, "e.a.d")).toBe(undefined);
    expect(get(object, "a[3]")).toBe(undefined);
    expect(get(object, "a[-1]")).toBe(undefined);

    // Setting the baseGet value to 34
    baseGet.mockReturnValue(34);

    // Testing if the baseGet value works.
    // Trying with null is important because if it would not work, then the baseGet
    // value would overwrite it.
    expect(get(object, "a[0].b.c")).toBe(34);
    expect(get(null, "a[0].b")).toBe(undefined);
});
