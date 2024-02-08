let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let [n, m] = [Number(input[0]), Number(input[1])];
// ------------------------------------------------------------------

let acc = 1;
for (let i = 0; i < m; i++) {
  acc *= n - i;
  acc /= i + 1;
}

console.log(acc);
