# readonly

## What is a Readonly Property?

- A property marked as `readonly` can be set only once—inside the class constructor.
- After initialization, its value **cannot be changed or reassigned**.

```ts
class User {
  readonly createdAt: Date;
  constructor() {
    this.createdAt = new Date();
  }
}
const u1 = new User();
u1.createdAt = new Date(); // Error: Cannot assign to 'createdAt' because it is a read-only property.
```

## Usage

- Use the `readonly` keyword before the property name in your class:

```ts
class Product {
  readonly id: string;

  constructor(id: string) {
    this.id = id;
  }
}
```

- Can combine with access modifiers:  
  `private readonly id: string` or `public readonly createdAt: Date`

```ts
private readonly createdAt: Date()
```
