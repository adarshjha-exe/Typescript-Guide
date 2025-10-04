export {};

class Animal {
  originalName: string;

  constructor(name: string) {
    this.originalName = name;
  }
}

let dog = new Animal('Dog');
console.log(dog);
