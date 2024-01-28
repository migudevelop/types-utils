---
runme:
  id: 01HN3A0NC7Q91S9ZMGF07KHKXJ
  version: v2.2
---

<div align="center">

# types-utils

A collection of functions for checking the types of values

</div>

## Installation

```sh
  # NPM
  pnpm install types-utils

  # NPM
  npm install types-utils

  # YARN
  yarn add types-utils
```

### Usage

Using CommonJS

```js
// CommonJS
const typeUtils = require('type-utils');

console.log(typeUtils.isString('Programming'));
```

Using ES6 Modules or TypeScript:

```js
// ES6 Modules or TypeScript
import typeUtils from 'type-utils';

console.log(typeUtils.isString('Programming'));
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

Copyright (c) 2024 Migudevelop
