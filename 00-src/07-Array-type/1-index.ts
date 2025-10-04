export {};
let person2 = {
  name: 'Alice',
  hobbies: ['singing', 'cooking'],
};

let colors: string[] = ['red', 'black'];
let colors1: Array<string> = ['green', 'orange'];

let fav: string[];

fav = ['Animal'];

for (const hobby of person2.hobbies) {
  console.log(hobby.toUpperCase());
}
