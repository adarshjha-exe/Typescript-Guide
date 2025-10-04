export {};

class Animal {
  originalName: string;
  speak: string;

  constructor(name: string, speak: string) {
    this.originalName = name;
    this.speak = speak;
  }

  bark(this: Animal) {
    console.log('I am speak like', this.speak);
  }
}

let dog = new Animal('Dog', 'Bhaw Bhaw');
console.log(dog);
dog.bark();

let dogCopy = {
  originalName: 'German sep',
  speak: 'Meow Meow',
  bark: dog.bark, //This copies the function reference
};
dogCopy.bark(); // When called, 'this' refers to dogCopy object
