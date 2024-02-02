let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
let n = Number(input);
// -------------------------------------------------------------------------

let cnt = 0;



for (let i = 1; i <= n; i++) {
  let num = i;
  while (num % 5 === 0) {
    cnt++;
    num /= 5;
  }
}

console.log(cnt);
