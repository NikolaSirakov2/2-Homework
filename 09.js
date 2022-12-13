let a = 1;
let b = 6;

let sum = 0;
let numbers = ('' + a);

for (let i = a + 1; i <= b; i++) {
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

  if(i < b){
    numbers += `, ${number}`;
  } else if (i = b){
    numbers += `${number}`;
  }
}

console.log(numbers);
