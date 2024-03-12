let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.trim());

let [N, M] = arr
  .shift()
  .split(" ")
  .map((it) => Number(it));

let cnt = 0;

const asciiA = "A".charCodeAt(),
  asciiZ = "Z".charCodeAt();
const offset = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const isVisit = Array.from({ length: asciiZ - asciiA + 1 }, () => false);
const DFS = (x, y, l) => {
  isVisit[arr[0][0].charCodeAt() - asciiA] = true;
  if (cnt < l) cnt = l;
  for (let [dx, dy] of offset) {
    let nx = x + dx,
      ny = y + dy;
    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
    if (isVisit[arr[nx][ny].charCodeAt() - asciiA]) continue;
    isVisit[arr[nx][ny].charCodeAt() - asciiA] = true;
    DFS(nx, ny, l + 1);
    isVisit[arr[nx][ny].charCodeAt() - asciiA] = false;
  }
};

DFS(0, 0, 1);
console.log(cnt);
