let person: {
  name: string;
  age: number;
  hobbies: [string, number];
} = {
  name: 'Alice',
  age: 10,
  hobbies: ['Singing', 1],
};

person.hobbies.push('Streaming'); // exception with push in tuple
