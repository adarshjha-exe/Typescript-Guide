# Public and Private Access Modifiers for Properties and Methods

## Example Scenario

- A class called `Department` is created with an `employees` property (array of strings) and two methods:
  - `addEmployee(employee: string)`: Adds a new employee.
  - `printEmployees()`: Logs the list and number of employees.

## Public vs Private Modifier

- **Default in TypeScript:**  
  Properties and methods are **public** unless specified otherwise. They can be accessed and modified from anywhere.

```ts
class Department {
  employees: string[]; // public by default
  // ...
}
dept.employees = 'Don'; // Direct external modification (public)
```

- **Problem with Public:**  
  Allows data to be altered in uncontrolled ways, potentially skipping validation logic in methods.

## Why Use Private?

- Marking a property as **private** restricts access so it can only be used within the class.

```ts
class Department {
  private employees: string[];
  // ...
}
dept.employees; // Error: 'employees' is private
```

- This ensures controlled data modification via methods (e.g., `addEmployee`), allowing validation or additional logic before changes.

## TypeScript vs ES6

- The **private/public** modifiers are enforced by TypeScript at compile-time.
- JavaScript (ES6) does **not** natively support private properties (until the `#` syntax).
- TypeScript flags errors, but the compiled JS will still allow direct property access at runtime.

## Conclusion

- Use **private** to encapsulate data and ensure safe access through class logic.
- Use **public** for properties/methods intended for outside access.
