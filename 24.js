let num = 23431;
let palindrome = num;
let turnNum = 0;

while (palindrome > 0) {
  let remainder = Math.floor(palindrome % 10);
  turnNum = Math.floor(turnNum * 10 + remainder);
  palindrome = Math.floor(palindrome / 10);
}

if (num === turnNum) {
  console.log(`${num} is palindrome`);
} else {
  console.log(`${num} is not palindrome`);
}
