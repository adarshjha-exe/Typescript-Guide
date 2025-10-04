function add(number1: number, number2: number): number {
  return number1 + number2;
}

let result: (a: number, b: number) => number; // assigning func type to var.
result = add;

console.log(result);
console.log(result(1, 6));
