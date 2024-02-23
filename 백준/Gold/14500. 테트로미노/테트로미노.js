let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map((it) => it.split(" ").map((it) => Number(it)));
let [[n, m], ...arr] = input;

let offset = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let max = 0;
let isVisit = Array.from({ length: n }, () => Array(m).fill(false));
const DFS = (x, y, l, sum) => {
  if (l === 4) {
    // 테트로미노 하나 완성
    max = Math.max(max, sum);
    return;
  }

  for (let [dx, dy] of offset) {
    let nx = x + dx,
      ny = y + dy;
    if (nx < 0 || nx >= n || ny < 0 || ny >= m || isVisit[nx][ny]) continue;

    isVisit[nx][ny] = true;
    DFS(nx, ny, l + 1, sum + arr[nx][ny]);
    if (l === 2) DFS(x, y, l + 1, sum + arr[nx][ny]);
    isVisit[nx][ny] = false;
  }
};

for (let i = 0; i < n; i++)
  for (let j = 0; j < m; j++) {
    isVisit[i][j] = true;

    DFS(i, j, 1, arr[i][j]);
    isVisit[i][j] = false;
  }

console.log(max);

