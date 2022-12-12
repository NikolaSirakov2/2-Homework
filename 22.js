let count = 0;
let num = 1;
let numbers = '';

while(count < 10) {
    if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0){
        count++;
        if (count < 10){
            numbers += `${count}:${num}, `
        } else if (count === 10){
            numbers += `${count}:${num}`
        }
        
    }
    num++;
}

console.log(numbers);