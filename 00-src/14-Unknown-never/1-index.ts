export {};
/*******  unknown   *****/
// no error with any
let userName: any;

userName = 'Jake2';
userName = 12;

let userInput: string;

userInput = userName;

// Error with unknown
let userName1: unknown;

userName1 = 'Jake2';
userName1 = 12;

let userInput1: string;

// userInput1 = userName1; //Type 'unknown' is not assignable to type 'string'

// fix:
if (typeof userName1 === 'string') {
  userInput1 = userName1;
}

/********   NEVER */
function throwError(errMsg: string, code: number): never {
  throw new Error(`Error is ${errMsg} and statusCode is ${code}`);
}

throwError('Forbidden', 403);

function printStatement(message: string) {
  console.log(message);
}

printStatement('Hello World !');
