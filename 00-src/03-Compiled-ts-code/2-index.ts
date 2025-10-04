export {};
const one = document.querySelector('#one') as HTMLInputElement;
const two = document.querySelector('#two') as HTMLInputElement;
const button = document.querySelector('#btn') as HTMLInputElement;

button.addEventListener('click', () => {
  add(Number(one.value), +two.value); // explict conv to  num
});

function add(input1: number, input2: number) {
  let sum = input1 + input2;
  console.log(sum);
}
