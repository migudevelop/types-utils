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
const typeUtils = require('type-utils')

console.log(typeUtils.isString('Programming'))
```

Using ES6 Modules or TypeScript:

```js
// ES6 Modules or TypeScript
import typeUtils from 'type-utils'

console.log(typeUtils.isString('Programming'))
```

## API Reference

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

## License

[MIT License](/LICENSE)

<div align="center">

Copyright (c) 2024 Migudevelop

</div>
