let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, str] = arr;
N = Number(N);
str = str.trim();

const LEN = 101;

// 101칸짜리 맵을 만들고 50에서 출발하도록 함
const map = Array.from({ length: LEN }, () =>
  Array.from({ length: LEN }, () => "#")
);

const offset = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let [x, y] = [50, 50];
map[x][y] = ".";
let dir = 2;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "F") {
    let [dx, dy] = offset[dir];
    x += dx;
    y += dy;
    map[x][y] = ".";
  }
  if (str[i] === "L") dir--;
  if (str[i] === "R") dir++;

  if (dir === -1) dir = 3;
  if (dir === 4) dir = 0;
}

let [minX, minY] = [LEN, LEN];
let [maxX, maxY] = [0, 0];
for (let i = 0; i < LEN; i++) {
  for (let j = 0; j < LEN; j++) {
    if (map[i][j] === ".") {
      maxX = Math.max(maxX, i);
      maxY = Math.max(maxY, j);
      minX = Math.min(minX, i);
      minY = Math.min(minY, j);
    }
  }
}

console.log(
  map
    .slice(minX, maxX + 1)
    .map((it) => it.slice(minY, maxY + 1).join(""))
    .join("\n")
);
