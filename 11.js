let N = 7;
let tree = "";
for (let i = 1; i <= N; i++) {
  for (let j = 0; j <= N - i; j++) {
    tree += " ";
  }
  for (k = 0; k < i * 2 - 1; k++) {
    tree += "*";
  }
  tree += "\n";
}
console.log(tree);
