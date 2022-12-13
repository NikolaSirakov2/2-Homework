let n = x;
let num = 1;
let result = 1;

do {
  result *= num;
  num++;
} while (num <= n);

console.log(result);