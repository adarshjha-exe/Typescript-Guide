export {};
//1.Type Inference
let myAge = 10; // type inference (TS automatically takes myAge var as Number)
// myAge="Hello" // Error : Type 'string' is not assignable to type 'number'.

//2. Type Assignment
let myName1: string = 'Bob';
// myName1 = 12; // Error : Type 'number' is not assignable to type 'string'

//3. any
let myName2;
myName2 = 'Alice';
myName2 = 12; // No error because myName2 is of type (any)
