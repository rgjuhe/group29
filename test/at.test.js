import at from '../materials_from_course/src/at';

describe('at function', () => {
  test('should return correct value for object without arrays', () => {
    const object = { 'a': { 'b': 1 } };
    expect(at(object, ['a.b'])).toEqual([1]);
    expect(at(object, ['a.b', 'a'])).toEqual([1, {'b': 1}]);
  });
  test('should return correct value for object with arrays', () => {
    const object = { 'a': [{ 'b': 1 }, 2, {'c': [3, {'d': 4}]} ]};
    expect(at(object, ['a[0].b'])).toEqual([1]);
    expect(at(object, ['a[2].c[0]', 'a[2].c[1].d'])).toEqual([3,4]);
  });
  
  test('should return undefined for wrong type of parameter', () => {
    const object = { 'a': { 'b': 1 } };
    expect(at(object, 1)).toEqual([undefined]);
    expect(at('text', ['a'])).toEqual([undefined]);
  });
  test('should return undefined for invalid path', () => {
    const object = { 'a': [{ 'b': 1 }, 2, {'c': [3, {'d': 4}]} ]};
    expect(at(object, ['c'])).toEqual([undefined]);
    expect(at(object, ['a[-1]'])).toEqual([undefined]);
  });
});