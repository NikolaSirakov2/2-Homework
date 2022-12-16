let num = 5;
let square = "";

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    while (j >= i){
    square += num - j + 1 + " ";
    break;
    }
  }
  square += "\n";
}

console.log(square);