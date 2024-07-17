import { isEmptyString, isEmptyArray } from './EmptyValues'

describe('EmptyValues', () => {
  describe('isEmptyString function', () => {
    it('should return true when the provided string is empty', () => {
      expect(isEmptyString('')).toBe(true)
    })

    it('should return false when provided a valid string', () => {
      expect(isEmptyString('foo')).toBe(false)
    })
  })

  describe('isEmptyArray function', () => {
    it('should return true when the provided array is empty', () => {
      expect(isEmptyArray([])).toBe(true)
    })

    it('should return false when the provided array contains values', () => {
      expect(isEmptyArray(['foo'])).toBe(false)
    })
  })
})
