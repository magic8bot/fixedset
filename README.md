# FixedSet

Is identical to a plain Javascript [ES6 Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) but with a cap on it's size. Once `x` amount of items have been added to the set it will start dropping the first item in the set.

## Usage

### Syntax

```typescript
new Set(setSize: number, ...items: T[])`
```

### Example

```typescript
import { FixedSet } from '@magic8bot/fixedset'

const fixedSet = new FixedSet(5, [1, 2, 3, 4]) // Set [1, 2, 3, 4]
fixedSet.add(5) // Set [1, 2, 3, 4, 5]
fixedSet.add(6) // Set [2, 3, 4, 5, 6]
fixedSet.add(7) // Set [3, 4, 5, 6, 7]
```
