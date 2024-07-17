import {
  ensureString,
  ensureBoolean,
  ensureNumber,
  ensureUndefined,
  ensureNull,
  ensureArray
} from './EnsureValues'

describe('EnsureValues', () => {
  describe.each([
    {
      functionName: 'ensureString',
      type: 'string',
      fn: ensureString,
      validValue: 'foo',
      invalidValue: null,
      invalidValueExpected: ''
    },
    {
      functionName: 'ensureBoolean',
      type: 'boolean',
      fn: ensureBoolean,
      validValue: true,
      invalidValue: null,
      invalidValueExpected: false
    },
    {
      functionName: 'ensureNumber',
      type: 'number',
      fn: ensureNumber,
      validValue: 5,
      invalidValue: null,
      invalidValueExpected: 0
    },
    {
      functionName: 'ensureUndefined',
      type: 'undefined',
      fn: ensureUndefined,
      validValue: undefined,
      invalidValue: 'foo',
      invalidValueExpected: undefined
    },
    {
      functionName: 'ensureNull',
      type: 'null',
      fn: ensureNull,
      validValue: null,
      invalidValue: 'foo',
      invalidValueExpected: null
    }
  ])(
    '$functionName function',
    ({ fn, type, validValue, invalidValue, invalidValueExpected }) => {
      it(`should return the provided value when a ${type} value is provided.`, () => {
        expect(fn(validValue)).toBe(validValue)
      })

      it(`should return a ${type} when a invalid value is provided.`, () => {
        expect(fn(invalidValue)).toBe(invalidValueExpected)
      })
    }
  )

  describe('ensureArray function', () => {
    it(`should return the provided value when an array value is provided.`, () => {
      expect(ensureArray(['foo'])).toStrictEqual(['foo'])
    })

    it(`should return an array when a invalid value is provided.`, () => {
      expect(ensureArray(null)).toStrictEqual([])
    })
  })
})
