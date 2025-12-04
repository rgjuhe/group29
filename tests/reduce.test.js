jest.mock("../materials_from_course/src/.internal/arrayReduce.js", () => jest.fn());
jest.mock("../materials_from_course/src/.internal/baseEach.js", () => jest.fn());
jest.mock("../materials_from_course/src/.internal/baseReduce.js", () => jest.fn());

import arrayReduce from "../materials_from_course/src/.internal/arrayReduce";
import baseEach from "../materials_from_course/src/.internal/baseEach";
import baseReduce from "../materials_from_course/src/.internal/baseReduce";
import reduce from "../materials_from_course/src/reduce";

test("reduces collection to some accumulated value", () => {

    const testArray = [2, 53, 5, 18, 22];
    const testObject = {"a": 1, "b": 3, "c": 2, "d": 1, "e": 10, "f": 2, "g": 1};

    arrayReduce.mockReturnValue(100);

    expect(reduce(testArray, (sum, n) => sum + n, 0)).toBe(100);

    baseReduce.mockReturnValue({"1": ["a", "d", "g"], "2": ["c", "f"], "3": ["b"], "10": ["e"]});

    expect(reduce(testObject, (result, value, key) => 
          (result[value] || (result[value] = [])).push(key), {}))
          .toBe({"1": ["a", "d", "g"], "2": ["c", "f"], "3": ["b"], "10": ["e"]});


});
