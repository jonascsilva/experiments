# How to run

```bash
npm run build
```

# Bundle size study

## Import all named

```js
import * as math from "./math";
```

```js
export { square, cube };
```

## Import only used

```js
import { cube } from "./math";

// And

import { cube, square } from "./math";
```

```js
export { square, cube };
```

## Import default

```js
import math from "./math";
```

```js
export default { square, cube };
```

## Comparison

### Use only one

| Strategy         | Bundle size |
| ---------------- | ----------- |
| Import with "\*" | 690B        |
| Import only used | 694B        |
| Import default   | 776B        |

### Use both

| Strategy         | Bundle size |
| ---------------- | ----------- |
| Import with "\*" | 837B        |
| Import only used | 847B        |
| Import default   | 865B        |
