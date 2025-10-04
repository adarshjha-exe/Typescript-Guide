# 10. Basics of the `any` and Union Types

## The `any` Type

- **Definition:**  
  `any` can hold any data type (string, number, object, array, etc.), similar to default JavaScript variables.

```ts
let variable: any = "hello";
variable = 5; // Allowed
variable = ; // Allowed
```

- **Downsides:**
- Disables TypeScript’s static type checking and IntelliSense.
- No compile-time errors or hints for type mismatches.
- Removes TypeScript’s main advantage—type safety.
- **Recommendation:**  
  Avoid using `any` unless absolutely necessary. Prefer static typing for reliability.

## The Union Type

- **Definition:**  
  Union types allow a variable or parameter to be more than one type.

```ts
let value: string | number;
value = 'Hello'; // Allowed
value = 10; // Allowed
```

```ts
function combine(input1: string | number, input2: string | number) {
  // Type narrowing logic recommended, e.g.:
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    return input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }
}
```

- **Type Narrowing:**  
  Use checks like `typeof` to properly handle each type variant within function logic.
