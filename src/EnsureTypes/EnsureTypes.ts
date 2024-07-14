import {
  isArray,
  isBoolean,
  isNull,
  isNumber,
  isString,
  isUndefined
} from '../Types'

/**
 * Determines whether a value is a string and returns it, but otherwise returns an empty string
 * @param value string
 * @returns string
 */
export function ensureString<T>(value: T): string {
  return isString(value) ? value : ''
}

/**
 * Determines whether a value is a boolean and returns it, but otherwise returns a false value
 * @param value boolean
 * @returns boolean
 */
export function ensureBoolean<T>(value: T): boolean {
  return isBoolean(value) ? value : false
}

/**
 * Determines whether a value is a number and returns it, but otherwise returns a zero value
 * @param value number
 * @returns number
 */
export function ensureNumber<T>(value: T): number {
  return isNumber(value) ? value : 0
}

/**
 * Determines whether a value is an undefined and returns it, but otherwise returns an undefined value
 * @param value undefined
 * @returns undefined
 */
export function ensureUndefined<T>(value: T): undefined {
  return isUndefined(value) ? value : undefined
}

/**
 * Determines whether a value is a null and returns it, but otherwise returns a null value
 * @param value null
 * @returns null
 */
export function ensureNull<T>(value: T): null {
  return isNull(value) ? value : null
}

/**
 * Determines whether a value is an array and returns it, but otherwise returns an empty array
 * @param value array
 * @returns array
 */
export function ensureArray<T>(value: T | T[]): T[] {
  return isArray(value) ? value : []
}
