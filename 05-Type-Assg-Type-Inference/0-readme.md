# 5. Type Assignment and Type Inference in TypeScript

## Overview

## Type Assignment

- **Explicit Type Assignment:**  
  You declare a variable and specify its type using a colon (`:`).
  - Example:
    ```ts
    let age: number = 25;
    let name: string = "Alice";
    let isActive: boolean = true;
    ```
  - This helps TypeScript check your code for type safety when compiling.

## Type Inference

- **TypeScript’s Built-in Inference:**  
  If you assign a value without explicitly providing a type, TypeScript will infer the type automatically based on the value.
  - Example:
    ```ts
    let score = 90;          // Inferred as number
    let username = "Bob";    // Inferred as string
    let isMember = false;    // Inferred as boolean
    ```
  - This makes code cleaner, but still keeps type safety.

- **When to Use Explicit Assignment vs. Inference:**  
  - Use explicit types when you want to restrict variable types strictly, or when initial value can be of multiple types.
  - Type inference works best for simple assignments with obvious types.






