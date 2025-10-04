# 11. Literal Types in TypeScript

## What are Literal Types?

- **Literal types** are specific string or number values used as types, restricting variables to those exact values.

```ts
let status: 'success' | 'error';
status = 'success'; // Allowed
status = 'error'; // Allowed
status = 'pending'; // Error
```

- Useful when you want a variable or argument to only accept certain predefined values.

## Combining Literal and Union Types

- **Union Types** allow multiple possible types; combining with literals restricts input to a limited set of values.
- Example with a function:

```ts
function combine(
  input1: number | string,
  input2: number | string,
  resultType: 'as-number' | 'as-text'
) {
  // Type narrowing and logic based on resultType
}
```

- Here, `resultType` only accepts `"as-number"` or `"as-text"`.

## Practical Example

- Pass two numbers or strings and a `resultType` parameter:

```ts
combine(1, 2, 'as-number'); // Output will be a number
combine('1', '2', 'as-text'); // Output will be "12"
```
