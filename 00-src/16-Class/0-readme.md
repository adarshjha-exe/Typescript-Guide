# Creating Classes with Constructors in

## Defining a Class

```ts
class User {
  name: string;
  age: number;
constructor(name: string, age: number) {
  this.name = name;
  this.age = age;
}

displayInfo() {
  console.log(User: ${this.name}, Age: ${this.age});
}
}
```

## The Constructor

- The `constructor` method runs when a new instance is created.
- Allows you to initialize properties at object creation:
  const u1 = new User("Alice", 28);
  u1.displayInfo();
