let num = x;
let numbers = "";

while (num !== 1) {
  if (num % 2 === 0) {
    num = 0.5 * num;
    if (num === 1) {
      numbers += num + ".";
    } else {
      numbers += num + " ";
    }
  } else {
    num = 3 * num + 1;
    numbers += num + " ";
  }
}

console.log(numbers);
