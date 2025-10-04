# Typescript-Guide

# Why Add `export {}` at the Top of Each TypeScript File?

## TL;DR;

- Adding `export {}` at the top of a TypeScript file makes it a module instead of a script. This prevents naming conflicts like duplicate functions with the same name in different files, enabling you to compile the whole project without errors.

- Adding `export {}` at the top of a TypeScript file forces the file to be treated as a **module** rather than a **script**.

## Benefits

- **Avoids global scope pollution:** Each file gets its own module scope.
- **Prevents duplicate identifier errors:** Functions or variables with the same name in different files won’t clash.
- **Improves modularity:** Enables better code organization and import/export usage.

- Without `export {}`, TypeScript treats the file as a script, where all declarations share the global scope, causing conflicts when running or compiling multiple files together.

---

## Example Without `export {}` (causes error)

````ts
// File: add1.ts
function add(a: number, b: number): number {
  return a + b;
}

// File: add2.ts
function add(x: number, y: number): number {
  return x + y;
}```

- If both files are compiled together **without modules**, TypeScript throws a **duplicate function implementation** error because `add` is declared twice in the global scope.

---

## Example With `export {}` (avoids error)

```ts
// File: add1.ts
export {};
function add(a: number, b: number): number {
  return a + b;
}

// File: add2.ts
export {};
function add(x: number, y: number): number {
  return x + y;
}```

- By adding export {} at the top, both files are treated as modules with their own scopes. Now, the two add functions do not conflict.
````
