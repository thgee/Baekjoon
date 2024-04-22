let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => Number(it)));

let [[N], arr, [tot]] = input;
let l = 0,
  r = Math.max(...arr) + 1;
while (l < r) {
  let upper = Math.floor((l + r) / 2);

  let sum = 0;
  for (let i = 0; i < N; i++) {
    if (arr[i] > upper) sum += upper;
    else sum += arr[i];
  }

  // 예산 초과 시 상한선 낮춤
  if (sum > tot) r = upper;
  // 예산 여유 시 상한선 올림
  else l = upper + 1;
}

console.log(l - 1);
