let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
let n = Number(input);

// ------------------------------------------------------------------


let arr = [3, 5];
let DP = Array.from({ length: n + 1 }, () => Number.MAX_SAFE_INTEGER);
DP[0] = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = arr[i]; j < n + 1; j++) {
    DP[j] = Math.min(DP[j], DP[j - arr[i]] + 1);
  }
}

console.log(DP[n] !== Number.MAX_SAFE_INTEGER ? DP[n] : -1);
