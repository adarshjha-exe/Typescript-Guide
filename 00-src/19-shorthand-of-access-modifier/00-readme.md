## Shorthand Notation

- You can **declare and assign access modifiers** (public/private) in the constructor itself, skipping separate property declarations:

```ts
class Department {
  constructor(private name: string, public employees: string[]) {}
}
```

- This automatically creates the properties, assigns their values, and applies access modifiers.
- Works for any TypeScript modifier: `public`, `private`, `protected`, and `readonly`.

```ts
class User {
constructor(
public username: string,
private password: string,
readonly createdAt: Date
) {}
```
-  password is only accessible within the class, createdAt cannot be changed
