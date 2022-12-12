let n = x;
let cards = ""

for (let i = n; i <= 51; i++) {
  let color;

  let sum = Math.floor(i / 4);
  let modularDivision = i % 4;

  if (modularDivision === 0) {
    sum += 1;
    color = "пика";
  } else if (modularDivision === 1) {
    sum += 2;
    color = "спатия";
  } else if (modularDivision === 2) {
    sum += 2;
    color = "каро";
  } else if (modularDivision === 3) {
    sum += 2;
    color = "купа";
  }

  if (sum < 11) {
    cards += `${sum} ${color}, `
  } else if (sum === 11) {
    cards += `Вале ${color}, `
  } else if (sum === 12) {
    cards += `Дама ${color}, `
  } else if (sum === 13) {
    cards += `Поп ${color}, `;
  } else if (sum === 14) {
    cards += `Aсо ${color}, `;
  }
}

cards += "Aco пика";

console.log(cards);
