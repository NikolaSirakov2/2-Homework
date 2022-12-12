let N = x;
let num = 1;
let result = 1;

do {
  result *= num;
  num++;
} while (num <= N);

console.log(result);
