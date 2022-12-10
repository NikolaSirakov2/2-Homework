let A = 1;
let B = 107;

let sum = 0;
let numbers = "";

for (let i = A; i <= B; i++) {
  if (i % 3 === 0) {
    numbers += `skip ${i}, `;
    continue;
  }

  let number = i * i;

  sum += number;
  if (sum > 200) {
    numbers += `${number}`;
    break;
  }

  if(i < B){
    numbers += `${number}, `;
  } else if (i = B){
    numbers += `${number}`;
  }
}

console.log(numbers);
