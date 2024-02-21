let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
let n = arr.shift();

for (let i = 0; i < n; i++) {
  let res = [];
  for (let j = 0; j < n; j++) {
    if (j >= n - i - 1) res.push("*");
    else res.push(" ");
  }
  console.log(res.join(""));
}
