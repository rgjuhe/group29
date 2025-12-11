jest.mock("../materials_from_course/src/.internal/arrayReduce.js", () => jest.fn());
jest.mock("../materials_from_course/src/.internal/baseEach.js", () => jest.fn());
jest.mock("../materials_from_course/src/.internal/baseReduce.js", () => jest.fn());

import arrayReduce from "../materials_from_course/src/.internal/arrayReduce";
import baseReduce from "../materials_from_course/src/.internal/baseReduce";
import reduce from "../materials_from_course/src/reduce";

describe("should call the right functions for arrays and objects", () => {

    test("should call arrayReduce when using an array", () =>  {
        arrayReduce.mockReturnValue(9);
        baseReduce.mockReturnValue({ '1': ['a', 'c'], '2': ['b'] });
        expect(reduce([2, 3, 4], (sum, n) => sum + n, 0)).toBe(9);
    });

    test("should call baseReduce when using an object", () => {
        arrayReduce.mockReturnValue(9);
        baseReduce.mockReturnValue({ '1': ['a', 'c'], '2': ['b'] });
        expect(reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
            (result[value] || (result[value] = [])).push(key)}))
            .toEqual({ '1': ['a', 'c'], '2': ['b'] });
    });

});
