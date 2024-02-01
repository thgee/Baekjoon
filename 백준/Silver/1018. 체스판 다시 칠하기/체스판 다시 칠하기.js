let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [size, ...arr] = input;
let [n, m] = size.split(" ");
arr = arr.map((str) => str.trim().split(""));
let res = Number.MAX_SAFE_INTEGER;

let wStart = [
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
];

let bStart = [
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
];

for (let i = 0; i < n - 7; i++) {
  for (let j = 0; j < m - 7; j++) {
    cnt = 0;
    for (let k = 0; k < 8; k++)
      for (let l = 0; l < 8; l++) if (wStart[k][l] !== arr[i + k][j + l]) cnt++;
    res = Math.min(cnt, res);

    cnt = 0;
    for (let k = 0; k < 8; k++)
      for (let l = 0; l < 8; l++) if (bStart[k][l] !== arr[i + k][j + l]) cnt++;
    res = Math.min(cnt, res);
  }
}

console.log(res);
