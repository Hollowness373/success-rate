# success-rate

A package for simulating success rates based on defined probabilities, returning Boolean result (true or false) to indicate success or failure

## Install

### Package manager

Using npm:

```bash
$ npm install success-rate
```


Once the package is installed, you can import the library using `require` approach:

```js
const { successRate } = require('success-rate')
```

Or

```js
const { successRate, getSuccessRate, preciseSRate, getPreciseRate } = require('success-rate');
```


## Examples

The `successRate` function takes a percentage(a number between 1 - 100) as input value and returns a Boolean result that indicates true for success and false for failure. The `getSuccessRate` allows to fetch the generated number used by `successRate`, which can be useful for debugging or inspecting the generated value.

```js
const { successRate, getSuccessRate } = require('success-rate');
console.log(successRate(85))
```

Use `preciseSRate` to include decimal values.

```js
const { preciseSRate, getPreciseRate } = require('success-rate');
console.log(preciseSRate(64.55))
```