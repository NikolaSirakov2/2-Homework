let side = x;
let sign = "/";

for(let i = 1; i <= side; i++){
    if (i === 1 || i === side){
        let line = '';
        for (let j = 1; j <= side; j++){
        line += '*';
    }
    console.log(line);
    } else {
        let midLine = '';
        for(let k = 1; k <= side; k++){
            if(k === 1 || k === side){
                midLine += '*';
            } else {
                midLine += sign;
            }
        }
        console.log(midLine);
    }
}

