let n = x;
let tree = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j <= n - i; j++) {
    tree += " ";
  }
  for (k = 0; k < i * 2 - 1; k++) {
    tree += "*";
  }
  tree += "\n";
}
console.log(tree);
