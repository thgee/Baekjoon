let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, m] = arr
  .shift()
  .trim()
  .split(" ")
  .map((it) => Number(it));

arr = arr.map((it) => it.trim().split(""));

let res = 0;
let isVisit = Array.from({ length: n }, () => Array(m).fill(false));
let offset = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const BFS = (x, y) => {
  let queue = [[x, y]];
  isVisit[x][y] = true;
  while (queue.length) {
    let [x, y] = queue.shift();
    for (let [dx, dy] of offset) {
      let nx = x + dx,
        ny = y + dy;
      if (
        nx < 0 ||
        nx >= n ||
        ny < 0 ||
        ny >= m ||
        isVisit[nx][ny] === true ||
        arr[nx][ny] === "X"
      )
        continue;
      if (arr[nx][ny] === "P") res++;
      isVisit[nx][ny] = true;
      queue.push([nx, ny]);
    }
  }
};
for (let i = 0; i < n; i++)
  for (let j = 0; j < m; j++) if (arr[i][j] === "I") BFS(i, j);
console.log(res || "TT");
