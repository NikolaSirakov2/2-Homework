let num = 5;
let square = "";

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    square += (i + j) + (((i-1)*num) - (i)) + " ";
  }
  square += "\n";
}

console.log(square);