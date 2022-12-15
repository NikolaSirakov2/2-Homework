let num = 5;
let square = "";

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    if ((i === j || i === num) && (j === i || j === num)){
    square += "1 ";
    } else if((j === (num - i) + 1)){
        square += "1 ";
    } else {
        square += "0 "
    }
  }
  square += "\n";
}

console.log(square);