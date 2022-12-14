let number = 7;
let triangle = "";

for(let row = 1; row <= number; row++){
    for(let col = 1;col <= number*2 - 1; col++){
        if(col === (number + row) - 1 || row === number || col === (number - row)+ 1){
            triangle += "+"
        } else {
            triangle += " "
        }
    }

    triangle += "\n"
}

console.log(triangle);