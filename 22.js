let n = 1;
let count = 0;
let numbers = "";

while (count < 11) {
  for (let i = n + 1; i <= 1050; i++) {
    if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0) {
      count++;
      if (count !== 10) {
        numbers += `${count}:${i},`;
      } else if (count === 10) {
        numbers += `${count}:${i}`;
      }
    }
  }
}

console.log(numbers);
