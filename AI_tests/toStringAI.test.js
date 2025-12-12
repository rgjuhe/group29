// toString.test.js
import toString from "../materials_from_course/src/toString";

// Mock isSymbol to control behavior
jest.mock("../materials_from_course/src/isSymbol", () => ({
  __esModule: true,
  default: (val) => typeof val === 'symbol'
}))

describe('toString', () => {
  test('returns empty string for null', () => {
    expect(toString(null)).toBe('')
  })

  test('returns empty string for undefined', () => {
    expect(toString(undefined)).toBe('')
  })

  test('preserves -0 sign', () => {
    const negZero = -0
    expect(toString(negZero)).toBe('-0')
  })

  test('converts normal numbers', () => {
    expect(toString(42)).toBe('42')
    expect(toString(3.14)).toBe('3.14')
  })

  test('converts strings without modification', () => {
    expect(toString('hello')).toBe('hello')
  })

  test('converts arrays recursively', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3')
    expect(toString([null, undefined, 5])).toBe(',,5')
    expect(toString([['a', 'b'], 'c'])).toBe('a,b,c')
  })

  test('converts symbols using toString', () => {
    const sym = Symbol('test')
    expect(toString(sym)).toBe('Symbol(test)')
  })

  test('converts objects using default string coercion', () => {
    expect(toString({ a: 1 })).toBe('[object Object]')
  })

  test('converts booleans', () => {
    expect(toString(true)).toBe('true')
    expect(toString(false)).toBe('false')
  })

  test('converts BigInt values', () => {
    expect(toString(123n)).toBe('123')
  })
})
