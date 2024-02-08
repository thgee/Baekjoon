let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();

// ------------------------------------------------------------------
let r = 1,
  sum = 0,
  m = 1234567891;
for (let i = 0; i < input[0].length; i++) {
  sum += (input[0][i].charCodeAt() - "a".charCodeAt() + 1) * r;
  r *= 31;
  r %= m;
}

console.log(sum % 1234567891);
