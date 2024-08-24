# How to run

```bash
npm run build
```

# Bundle size study

## Strategies

### Import all named

```js
import * as math from "./math";
```

```js
export { square, cube };
```

### Import only used

```js
import { cube } from "./math";

// And

import { cube, square } from "./math";
```

```js
export { square, cube };
```

### Import default

```js
import math from "./math";
```

```js
export default { square, cube };
```

## Comparison

### Development

#### Use only one

| Strategy         | Bundle size |
| ---------------- | ----------- |
| Import with "\*" | 690B        |
| Import only used | 694B        |
| Import default   | 776B        |

#### Use both

| Strategy         | Bundle size |
| ---------------- | ----------- |
| Import with "\*" | 837B        |
| Import only used | 847B        |
| Import default   | 865B        |

### Production

#### Use only one

| Strategy         | Bundle size |
| ---------------- | ----------- |
| Import with "\*" | 253B        |
| Import only used | 253B        |
| Import default   | 274B        |

#### Use both

| Strategy         | Bundle size |
| ---------------- | ----------- |
| Import with "\*" | 368B        |
| Import only used | 368B        |
| Import default   | 404B        |
