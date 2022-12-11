let A = 1;
let B = 6;

let sum = 0;
let numbers = ('' + A);

for (let i = A + 1; i <= B; i++) {
  if (i % 3 === 0) {
    numbers += `, skip ${i}`;
    continue;
  }

  let number = i * i;

  sum += number;
  if (sum > 200) {
    numbers += `${number}`;
    break;
  }

  if(i < B){
    numbers += `, ${number}`;
  } else if (i = B){
    numbers += `${number}`;
  }
}

console.log(numbers);
