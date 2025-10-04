# 12. Function Return Value Types and `void`

## Function Return Types

- You can explicitly declare the return type of a function:

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

- Here, `: number` specifies the function must return a number.
- If the function returns a string (or another type), TypeScript will show an error.

- TypeScript often infers return types based on function logic, but you can force a type for stricter checks.

## The `void` Type

- Used for functions that do not return a value (e.g., logging to console).

```ts
function printResult(value: number): void {
  console.log('Result:', value);
}
```

- `void` signals that nothing is returned.
- If you try to return a value (other than `undefined`), TypeScript shows an error.

- `void` signals that nothing is returned.
- If you try to return a value (other than `undefined`), TypeScript shows an error.

## Difference Between `void` and `undefined`

- `void`:
- Used as a function return type that should _not_ return a value (other than `undefined`).
- Indicates absence of any return.

- `undefined`:
- Is a valid type and value in JavaScript and TypeScript.
- Can assign variables the `undefined` type:

  ```
  let result: undefined;
  result = undefined; // valid
  ```

- **Key Difference:**
- If you annotate a function’s return type as `undefined`, you _must_ return `undefined` explicitly.
- For `void` functions, you can omit `return` or use `return;` with no value.

> Note: Some older guides or informal notes say that functions annotated with `: undefined` required an explicit `return undefined;`. In modern TypeScript this is not required — an omitted return implicitly yields `undefined`.

- Usage example:

```ts
function logMessage(): void {
  console.log('Message');
}

function returnUndefined(): undefined {
  return undefined;
}
```

## Summary Table

| Return Type | Use Case                                                                                         | Requires Explicit Return?                                    |
| ----------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| `void`      | No value returned                                                                                | No (can omit return statement)                               |
| `undefined` | Represents the value `undefined` — functions may omit a return and implicitly return `undefined` | No (you may omit a return; `return undefined` is also valid) |
