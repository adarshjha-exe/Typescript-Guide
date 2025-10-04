function combine(
  number1: number | string,
  number2: number | boolean | string,
  resultType: 'as-text' | 'as-number' // we can use enums here as well
) {
  let result: string | number;
  if (typeof number1 === 'number' && typeof number2 === 'number') {
    result = number1 + number2;
  } else {
    result = number1.toString() + number2.toString();
  }
  if (resultType === 'as-number') {
    return +result;
  } else {
    return result.toString();
  }
}

let finalResult = combine(1, 5, 'as-number');
console.log(finalResult);
