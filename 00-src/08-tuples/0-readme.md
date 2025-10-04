# 8. Tuples in TypeScript: The Tuple Data Type

## What is a Tuple?

- **Tuple:**  
  An ordered list of elements where each element type and position is defined explicitly.

  - Example:

  ```ts
  let role: [number, string] = [1, 'admin'];
  ```

  - Here, `role` must always have first a `number` and second a `string`.

- **Contrast with Arrays:**  
  With arrays (e.g., `string[] | number[]`), values and their orders are not restricted as strictly as with tuples.

## Why Use Tuples?

- To ensure a variable contains a fixed number of values with defined types.
- Useful in scenarios like representing key-value pairs or specific structured data.

## Tuple Syntax & Usage

- **Defining Tuples:**

```ts
let person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Alice',
  age: 25,
  hobbies: ['reading'],
  role: [2, 'admin'],
};
```

- Attempts to reassign `role[0]` with a string or `role[1]` with a number will generate an error.
- Tuples restrict not only types but also the length; extra elements are disallowed.

## Practical Points

- **Tuple Exception:**  
  TypeScript allows `.push()` to add more elements beyond the defined length, but this is generally considered a loophole and should be avoided.
- **Good Practice:**  
  Only assign tuples as specified. Do not mutate them with `.push()` to maintain type safety.
