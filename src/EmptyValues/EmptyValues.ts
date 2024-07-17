import { isArray, isString } from '../Types'

/**
 * Determines whether a value is an empty string
 * @param value value to check
 * @returns boolean
 */
export function isEmptyString(value: unknown): value is '' {
  return isString(value) && value === ''
}

/**
 * Determines whether a value is an empty array
 * @param value value to check
 * @returns boolean
 */
export function isEmptyArray<T>(value: T | T[]): value is Array<T> {
  return isArray(value) && value.length === 0
}
