let num = x;
let itsPrime = true;

for (let i = 2; i < num; i++){
    if(num % i === 0){
        itsPrime = false;
        break;
    }
}

console.log(itsPrime);