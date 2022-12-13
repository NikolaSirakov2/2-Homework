let num = 1;
let result = "";

while(num <=9){
    for (let i = num; i <= 9; i++){
        result += `${num}*${i}; `;
    }
    result += "\n";
    num++;
}

console.log(result);