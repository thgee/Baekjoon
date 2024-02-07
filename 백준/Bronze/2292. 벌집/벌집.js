let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
let n = Number(input);
// ------------------------------------------------------------------

let lastBlock = 1;
let L = 1;
while (n > lastBlock) {
  lastBlock += 6 * L++;
}

console.log(L);
