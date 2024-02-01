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

const countDiff = (board, x, y) => {
  cnt = 0;
  for (let i = 0; i < 8; i++)
    for (let j = 0; j < 8; j++) if (board[i][j] !== arr[x + i][y + j]) cnt++;
  res = Math.min(cnt, res);
};

for (let i = 0; i < n - 7; i++) {
  for (let j = 0; j < m - 7; j++) {
    countDiff(wStart, i, j);
    countDiff(bStart, i, j);
  }
}

console.log(res);
