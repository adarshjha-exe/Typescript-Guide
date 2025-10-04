# 9. Enums (Enumerated Types) in TypeScript

- Enums help represent a group of named constants, improving code readability and maintainability.

## What is an Enum?

- **Enum Definition Syntax:**

```ts
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
```

- Here, `Role` is an enum with three members: `ADMIN`, `READ_ONLY`, `AUTHOR`.
- By default, values are auto-assigned as numbers starting from 0 (`ADMIN = 0`, `READ_ONLY = 1`, etc.).

- **Assigning values to enum members explicitly:**

```ts
enum Status {
  SUCCESS = 'success',
  ERROR = 'error',
}
```

- Now, `Status.SUCCESS` will have the value `"success"`.

## Why Use Enums?

- **Readability:** Named values make code easier to understand than hard-coded numbers or strings.
- **Grouping Constants:** Collects related constants into a single type.
- **Prevent Errors:** Restricts variable values to predefined valid options.

## Using Enums in Objects

- Example:

```ts
let user = {
  name: 'Alice',
  role: Role.ADMIN,
};
```

- TypeScript enforces `role` can only take values from the `Role` enum.

## Key Points

- Enums make code more descriptive and less error-prone.
- TypeScript enums can have **numeric** or **string** values.
- Use enums for roles, statuses, and other fixed sets of related constants.
