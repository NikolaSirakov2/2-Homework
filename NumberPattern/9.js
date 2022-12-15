let num = 3;
let square = "";

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    if ((j !== num && j !== 1) && (i === 1 || i === num)){
    square += "1 ";
     }  else if ((i > 1 && i < num) && (j === 1 || j === num)){
         square += "1 ";
    }   else {
        square += "0 "
    }
  }
  square += "\n";
}

console.log(square);