let n = 1;
let numbers = "";

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n; j++){
        numbers += (n - 2) + ((i*2) - 1);
    }
   
    numbers += "\n"
}

console.log(numbers); 