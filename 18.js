let firstNum = x;
let secondNum = y;

for (let i = 1; i <= firstNum; i++){
    for (let k = 1; k <= secondNum; k++){
        let result = i*k
        console.log(`${i}*${k}= ${result}`);
    }
}