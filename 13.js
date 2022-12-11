let number = 0;
let sum = Math.ceil(Math.random()*26 + 1);
console.log(sum);

for (let i = 100; i <= 999; i++) {
  number = i;
  
  let firstD = Math.floor(number / 100);
  let secondD = Math.floor((number % 100) / 10);
  let y = number % 100;
  let thirdD = y % 10;

  let digitSum = firstD + secondD + thirdD;

  if (digitSum === sum) {
    console.log(number);
  }
}