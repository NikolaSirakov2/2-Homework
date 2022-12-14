let square = "";

for (let row = 1; row <= 10; row++) {
  for (let col = 1; col <= 10; col++) {
    let num = row - 1 + col;
    if (num < 10) {
      square += num + " ";
    } else {
      square += (num - 10) + " ";
    }
  }

  square += "\n";
}

console.log(square);
