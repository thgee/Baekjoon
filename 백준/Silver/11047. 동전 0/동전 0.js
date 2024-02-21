let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, K] = arr
  .shift()
  .split(" ")
  .map((it) => Number(it));

arr = arr.map((it) => Number(it));
let cnt = 0;
for (let i = arr.length - 1; i >= 0; i--) {
  if (K >= arr[i]) {
    cnt += parseInt(K / arr[i]);
    K %= arr[i];
  }
}

console.log(cnt);
