# Logic

`@xplato/logic` is a collection of random utilities and React components/hooks that I use in my projects. I know the library by memory, so bear with me if the documentation is lacking; I will update it as often as I remember to.

For brevity, I may refer to this project as simply "Logic"

## Installation

```bash
yarn add @xplato/logic
```

or

```bash
npm install @xplato/logic
```

## Usage

(There are no default exports)

```ts
import { useDynamicPanel, generateMods } from "@xplato/logic"

// ...
```

## Documentation

Logic is primarily split into two parts: Core and React. The Core section contains all of the non-React, general utilities like `generateMods`, `kebabize`, and so on. The Core package does not access any browser-level APIs, so its utilities are safe to use in any environment.

### Core

#### Array

##### `interweave<T>(arr1: T[], arr2: T[])`

Interweaves two arrays together.

```ts
import { interweave } from "@xplato/logic"

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

console.log(interweave(arr1, arr2))
// [1, 4, 2, 5, 3, 6]
```

##### `range(start: number, end: number, step: number = 1)`

Generates an array of numbers from `start` to `end` with a step of `step` (default `1`).

```ts
import { range } from "@xplato/logic"

console.log(range(0, 10))
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(range(0, 10, 2))
// [0, 2, 4, 6, 8, 10]
```

#### DOM

##### `generateMods(mods: Mods): string | string[]`

`generateMods` is a function used to generate an array of CSS classnames from variables. It takes an object. It is expected to be placed in a call to `classNames`.

```ts
import { generateMods } from "@xplato/logic"

const mods = generateMods({
  isOpen: true,
  isClosed: false,
  size: "sm",
  color: "red",
  light: true,
  dark: false,
})

// mods = ["is-open", "size-sm", "color-red", "light"]
```

##### `smoothScrollTo(elementID: string): void`

`smoothScrollTo` is a function used to smoothly scroll to an element on the page. It takes an element ID.

```ts
import { smoothScrollTo } from "@xplato/logic"

smoothScrollTo("elementID")
```

#### Objects

##### `omitFields<T, Fields extends keyof T>(object: T, fields: Fields[]): Omit<T, Fields>`

Removes fields from an object.

```ts
import { omitFields } from "@xplato/logic"

const object = {
  a: 1,
  b: 2,
  c: 3,
}

const result = omitFields(object, ["a", "c"])
// result = { b: 2 }
```

#### Strings

##### `removeWhitespaceAndMakeLowerCase(str: string): string`

The name is rather clear. Accepts a string, returns a string.

```ts
import { removeWhitespaceAndMakeLowerCase } from "@xplato/logic"

const result = removeWhitespaceAndMakeLowerCase("HI THERE")
// result = "hithere"
```

##### `kebabize(str: string): string`

Converts a string to kebab-case.

```ts
import { kebabize } from "@xplato/logic"

const result = kebabize("Hello There")
// result = "hello-there"

const result2 = kebabize("helloThere")
// result2 = "hello-there"
```

##### `toSlug(str: string)`

Replaces spaces with dashes and converts a string to lowercase.

```ts
import { toSlug } from "@xplato/logic"

const result = toSlug("Hello There")
// result = "hello-there"
```

##### `capitalize(str: string): string`

Capitalizes the first letter of a string.

```ts
import { capitalize } from "@xplato/logic"

const result = capitalize("hello there")
// result = "Hello there"
```

### React

#### Hooks

##### `useDynamicPanel<ElementType extends Element>(): DynamicPanel<ElementType>()`

`useDynamicPanel` is a hook used to control the visibility of a dynamic panel. A dynamic panel is a piece of UI that is hidden by default and shown on request. It is often used for dropdowns, modals, and other similar UI elements.

```ts
import { useDynamicPanel } from "@xplato/logic"

const dynamicPanel = useDynamicPanel()

// dynamicPanel = {
// 	ref: RefObject<ElementType>,
// 	isOpen: boolean,
// 	open: () => void,
// 	close: () => void,
// 	toggle: () => void,
// }
```

##### `usePrevious(state: any)`

A simple hook that tracks the previous value of a state variable.

```ts
import { usePrevious } from "@xplato/logic"

const [state, setState] = useState(0)
const previousState = usePrevious(state)

setState(1)
// previousState = 0

setState(2)
// previousState = 1
```

I use this often in comparison with the current state to determine if a state variable has changed.
