export {};
function sum(input1: number, input2: number): number {
  return input1 + input2;
}

console.log(sum(4, 9));

/******** */

function returnNothing(): void {
  console.log('Hello world');
}

returnNothing();

/****Example 2**** */

function returnNothing1(): undefined {
  console.log('Hello world');
}

returnNothing();
returnNothing1();
