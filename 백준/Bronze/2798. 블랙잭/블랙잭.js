let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, m] = input.shift().trim().split(" ");

let arr = input[0].split(" ").map((it) => Number(it));
// ------------------------------------------------------------------
let res = 0;


for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      let sum = arr[i] + arr[j] + arr[k];
      if (sum <= m) res = Math.max(res, sum);
    }
  }
}

console.log(res);
