export {};
let age: any = 'one two';
age = 'Twelve';
age = 12;
age = false;

// union
function combine(number1: number | string, number2: number | boolean | string) {
  let result: string | number;
  if (typeof number1 === 'number' && typeof number2 === 'number') {
    result = number1 + number2;
  } else {
    result = number1.toString() + number2.toString();
  }
  return result;
}

let finalResult = combine('hello', 5);
console.log(finalResult)