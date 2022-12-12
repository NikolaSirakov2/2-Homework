let n = 1;
let count = 0;
let numbers = "";


  for (let i = n + 1; i <= 1100; i++) {
    if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0) {
      count++;
      if(count === 11){
        break;
      } else if (count !== 10) {
        numbers += `${count}:${i},`;
      } else if (count === 10) {
        numbers += `${count}:${i}`;
      }
    }
  }


console.log(numbers);
