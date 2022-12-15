let num = 5;
let square = "";

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    if (j === Math.ceil(num/2) && i === Math.ceil(num/2)){
    square += "0 ";
    } else {
        square += "1 "
    }
  }
  square += "\n";
}

console.log(square);