// get.unit.test.js
import get from "../materials_from_course/src/get"
import baseGet from "../materials_from_course/src/.internal/baseGet"

// Mock baseGet so we can control its return values
jest.mock("../materials_from_course/src/.internal/baseGet", () => ({
  __esModule: true,
  default: jest.fn()
}))

describe('get (unit tests)', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('returns value from baseGet when defined', () => {
    baseGet.mockReturnValue(42)
    const obj = { a: 1 }
    expect(get(obj, 'a')).toBe(42)
    expect(baseGet).toHaveBeenCalledWith(obj, 'a')
  })

  test('returns defaultValue when baseGet returns undefined', () => {
    baseGet.mockReturnValue(undefined)
    const obj = { a: 1 }
    expect(get(obj, 'b', 'default')).toBe('default')
  })

  test('returns undefined when baseGet returns undefined and no defaultValue provided', () => {
    baseGet.mockReturnValue(undefined)
    const obj = { a: 1 }
    expect(get(obj, 'b')).toBeUndefined()
  })

  test('returns defaultValue when object is null', () => {
    const result = get(null, 'a.b.c', 'fallback')
    expect(result).toBe('fallback')
    // baseGet should not be called when object is null
    expect(baseGet).not.toHaveBeenCalled()
  })

  test('returns defaultValue when object is undefined', () => {
    const result = get(undefined, 'a.b.c', 'fallback')
    expect(result).toBe('fallback')
    expect(baseGet).not.toHaveBeenCalled()
  })

  test('returns actual null if baseGet resolves to null', () => {
    baseGet.mockReturnValue(null)
    const obj = { x: null }
    expect(get(obj, 'x', 'default')).toBeNull()
  })
})

