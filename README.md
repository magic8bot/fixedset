# FixedSet

Is identical to a plain Javascript [ES6 Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) but with a cap on it's size. Once `x` amount of items have been added to the set it will start dropping the first item in the set.

## Test on RunKit
[trasherdk/fixedset](https://runkit.com/trasherdk/fixedset)

## Usage

### Syntax

```typescript
new Set(setSize: number, ...items: T[])`
```

## Examples

### Plain Javascript/Node
```javascript
const FixedSet = require("@magic8bot/fixedset").FixedSet;

var data = [
  { "o": 10.0, "h":15.0, "l":9.5, "c":11.0 },
  { "o": 11.0, "h":12.5, "l":9.8, "c":12.0 },
  { "o": 12.0, "h":15.5, "l":10.5, "c":13.0 },
  { "o": 13.0, "h":16.0, "l":10.5, "c":14.0 }
];

var fixedset = new FixedSet(5, data);

for (let item of fixedset.values())
    console.log(item);
    
console.log("Add one object");

fixedset.add({"o": 14.0, "h": 14.5, "l": 12.0, "c":13.5});

for (let item of fixedset.values())
    console.log(item);
```
### Typescript
```typescript
import { FixedSet } from '@magic8bot/fixedset'

const fixedSet = new FixedSet(5, [1, 2, 3, 4]) // Set [1, 2, 3, 4]
fixedSet.add(5) // Set [1, 2, 3, 4, 5]
fixedSet.add(6) // Set [2, 3, 4, 5, 6]
fixedSet.add(7) // Set [3, 4, 5, 6, 7]
```
