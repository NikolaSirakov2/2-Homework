let num = 5;
let square = "";

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    if (j === 1){
      square += num + " ";
    } 
  }
  square += "\n";
}

console.log(square);