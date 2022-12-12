let number = 0;


for (let i = 100; i <= 999; i++){
    number = i;
    let firstD = Math.floor(number/100);
    let secondD = Math.floor((number % 100)/10);
    let y = number % 100;
    let thirdD = y % 10;

    if (firstD !== secondD && firstD !== thirdD && secondD !== thirdD){
        console.log(number);
    }
}
