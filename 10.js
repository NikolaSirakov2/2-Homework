let x = 9;

let number = x;
let isPrime = true;

for (let i = 2; i < x; i++){
    if(number % i === 0){
        isPrime = false;
    }
}

console.log(isPrime);