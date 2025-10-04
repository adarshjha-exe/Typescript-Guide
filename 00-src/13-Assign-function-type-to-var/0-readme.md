# 13. Assign Functions as Types to Variables

## Assigning Functions to Variables

- You can store a function in a variable, just like in JavaScript.

```ts
function add(a: number, b: number) {
  return a + b;
}

let combinedValues = add; // Can be called as combinedValues(1, 2)
```

- By default, without a type annotation, the variable takes the type `any`, which allows assignment of any value (including numbers, strings, etc.), risking runtime errors.

## Enforcing Function Types

- Assign a function type explicitly for safety:

```ts
let combinedValues: (a: number, b: number);
combinedValues = add; // Allowed
combinedValues = printResult; // Not allowed if printResult doesn't match signature
combinedValues = 5; // Error
```

- This ensures only compatible functions can be assigned.

## Argument & Return Types

- You can further restrict with exact argument and return types.

```ts
let combinedValues: (a: number, b: number) => number;
```

- Only functions accepting two numbers and returning a number are allowed.

## Behavior with Incompatible Functions

- Attempting to assign a function with different arguments or return type:

```ts
function printResult(value: number): void {
  console.log('Result:', value);
}
combinedValues = printResult; // Error: does not match (a:number, b:number) => number
```

- TypeScript will throw a compile-time error if the function does not match the expected type signature.

## Why Do This?

- Prevents runtime errors due to incorrect assignment.
- Enforces correct function usage at compile time.
- Improves code clarity and maintainability.

## Summary Table

| Variable Type                    | Allowed Assignments     | Example Error                         |
| -------------------------------- | ----------------------- | ------------------------------------- |
| `any`                            | Any value/function      | Can assign number, string, fn         |
| `(a:number, b:number) => number` | Only matching functions | Error if assigning number/printResult |
