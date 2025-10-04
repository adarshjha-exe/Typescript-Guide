# 14. Unknown Type and Never Type

## The `unknown` Type

- **Definition:**  
  `unknown` is a type-safe counterpart to `any`, used when a variable's type is not known during declaration.
  - Syntax:
    ```ts
    let value: unknown;
    ```
- **Type Safety:**
  - You can't directly use operations on `unknown` variables (e.g., call methods, access properties) without type-checking.
    - Example:
    ```ts
    value = 'Hello';
    if (typeof value === 'string') {
      // Safe to use string methods here
      console.log(value.toUpperCase());
    }
    ```
- **Use Case:**  
  When you accept input from external sources, APIs, or user input, you may not know its type upfront. Use `unknown` to enforce checks before using the value.

## The `never` Type

- **Definition:**  
  Represents values that never occur—functions that throw errors or run infinitely.
  - Syntax:
    ```ts
    function crash(): never {
      throw new Error('Crash!');
    }
    ```
- **Usage Scenarios:**
  - Functions that always throw an exception.
  - Functions that run infinite loops.
  - Used in exhaustive type checking, e.g., with switch statements to catch unhandled cases.

## Key Differences

| Type      | Typical Use Case           | Restrictions                 |
| --------- | -------------------------- | ---------------------------- |
| `unknown` | Variable with unknown type | Must check type before usage |
| `never`   | Function never returns     | Must not return any value    |

## Practical Benefits

- **`unknown` enforces type checks** and improves runtime safety.
- **`never` improves code clarity** for error functions and unreachable code paths.

## Conclusion

- Use `unknown` for safer handling of uncertain types, especially with external or dynamic inputs.
- Use `never` to annotate functions that should not return, making your code more robust and understandable.
