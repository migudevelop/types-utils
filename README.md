<div align="center">

# types-tools

A collection of functions to check the types of the values provided.

</div>

## Table of Contents

<details>
<summary><strong>Details</strong></summary>

- [Installation](#installation)
- [Usage](#usage)
- [Utilities](#main-rules-overview)
  * [Check types](#check-types)
  * [Ensure types](#ensure-types)
- [License](#license)

</details>

## Installation

```sh
  # NPM
  pnpm install types-tools

  # NPM
  npm install types-tools

  # YARN
  yarn add types-tools
```

## Usage

Using CommonJS

```js
// CommonJS
const typeTools = require('types-tools')

console.log(typeTools.isString('Programming'))
```

Using ES6 Modules or TypeScript:

```js
// ES6 Modules or TypeScript
import { isString } from 'types-tools'

console.log(isString('Programming'))
```

## Utilities

### Check types

* `isString()`: Determines whether a value is a string

* `isNumber()`: Determines whether a value is a number

* `isBoolean()`: Determines whether a value is a boolean

* `isNull()`: Determines whether a value is null

* `isArray()`: Determines whether a value an array

* `isFunction()`: Determines whether a value is a function

* `isUndefined()`: Determines whether a value is undefined

* `isNullish()`: Determines whether a value is undefined or null

### Check empty values

* `isEmptyString()`: Determines whether a value is an empty string

* `isEmptyArray()`: Determines whether a value is an empty array

### Ensure values

* `ensureString()`: Determines whether a value is a string and returns it, but otherwise returns an empty string

* `ensureBoolean()`: Determines whether a value is a boolean and returns it, but otherwise returns a false value

* `ensureNumber()`: Determines whether a value is a number and returns it, but otherwise returns a zero value

* `ensureUndefined()`: Determines whether a value is an undefined and returns it, but otherwise returns an undefined value

* `ensureNull()`: Determines whether a value is a null and returns it, but otherwise returns a null value

* `ensureArray()`: Determines whether a value is an array and returns it, but otherwise returns an empty array

<br/>

## License

[MIT License](/LICENSE)

<div align="center">

Copyright (c) 2024 Migudevelop

</div>
