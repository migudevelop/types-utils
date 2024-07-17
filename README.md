<div align="center">

# types-utils

A collection of functions to check the types of the values provided.

</div>

## Installation

```sh
  # NPM
  pnpm install @migudevelop/types-utils

  # NPM
  npm install @migudevelop/types-utils

  # YARN
  yarn add @migudevelop/types-utils
```

### Usage

Using CommonJS

```js
// CommonJS
const typeUtils = require('@migudevelop/types-utils')

console.log(typeUtils.isString('Programming'))
```

Using ES6 Modules or TypeScript:

```js
// ES6 Modules or TypeScript
import { isString } from '@migudevelop/types-utils'

console.log(isString('Programming'))
```

## Check types

### isString()

Determines whether a value is a string

### isNumber()

Determines whether a value is a number

### isBoolean()

Determines whether a value is a boolean

### isNull()

Determines whether a value is null

### isArray()

Determines whether a value an array

### isFunction()

Determines whether a value is a function

### isUndefined()

Determines whether a value is undefined

### isNullish()

Determines whether a value is undefined or null

<br/>

## Ensure types

### ensureString()

Determines whether a value is a string and returns it, but otherwise returns an empty string

### ensureBoolean()

Determines whether a value is a boolean and returns it, but otherwise returns a false value

### ensureNumber()

Determines whether a value is a number and returns it, but otherwise returns a zero value

### ensureUndefined()

Determines whether a value is an undefined and returns it, but otherwise returns an undefined value

### ensureNull()

Determines whether a value is a null and returns it, but otherwise returns a null value

### ensureArray()

Determines whether a value is an array and returns it, but otherwise returns an empty array

<br/>

## License

[MIT License](/LICENSE)

<div align="center">

Copyright (c) 2024 Migudevelop

</div>
