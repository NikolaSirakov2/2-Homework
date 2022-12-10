let firstNum = x;
let secondNum = y;

if(firstNum < secondNum){
    for(let i = firstNum; i<=secondNum; i++){
        console.log(i);
    }
} else if(secondNum < firstNum){
    for(let j = secondNum; j<=firstNum; j++){
        console.log(j);
    }
}