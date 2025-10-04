# Understanding 'this' Binding in TypeScript

## Code Example
```typescript
let dogCopy = {
  originalName: 'German sep',
  speak: 'Meow Meow',
  bark: dog.bark, // Copies the function reference
};
dogCopy.bark(); // Outputs: "I am speak like Meow Meow"
```

## Why does it output "Meow Meow"?

1. **Function Reference Copy**: 
   - When we do `bark: dog.bark`, we're only copying the function reference
   - We're NOT copying the original context (`this` binding) from the `dog` object

2. **Dynamic 'this' Binding**:
   - In JavaScript/TypeScript, `this` inside a method is determined by HOW the method is called, not WHERE it was defined
   - When you call `dogCopy.bark()`, the `this` inside the `bark` function refers to `dogCopy`
   - This is because the object before the dot (`.`) becomes `this` inside the method

3. **Method Call Breakdown**:
   ```typescript
   bark(this: Animal) {
     console.log('I am speak like', this.speak);
   }
   ```
   - When called as `dogCopy.bark()`:
     - `this` becomes `dogCopy`
     - `this.speak` looks up `speak` in `dogCopy`
     - Finds `'Meow Meow'` and uses that value

4. **TypeScript's `this` Parameter**:
   - Even though we declared `this: Animal` in the method signature
   - This is only a compile-time check
   - At runtime, JavaScript's normal `this` binding rules apply

## How to Preserve Original Context

If you wanted to preserve the original `dog`'s context, you could:

1. Use `bind()`:
   ```typescript
   let dogCopy = {
     originalName: 'German sep',
     speak: 'Meow Meow',
     bark: dog.bark.bind(dog) // Locks 'this' to dog
   };
   ```

2. Or use an arrow function:
   ```typescript
   class Animal {
     bark = () => {
       console.log('I am speak like', this.speak);
     }
   }
   ```
