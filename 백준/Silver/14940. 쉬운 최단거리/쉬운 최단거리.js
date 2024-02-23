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
let isVisit = Array.from({ length: n }, () => Array(m).fill(false));
const BFS = (x, y, l) => {
  let queue = [[x, y, l]];
  arr[x][y] = 0;
  isVisit[x][y] = true;
  while (queue.length) {
    let [x, y, l] = queue.shift();
    for (let [dx, dy] of offset) {
      let nx = x + dx,
        ny = y + dy;
      if (
        nx < 0 ||
        nx >= n ||
        ny < 0 ||
        ny >= m ||
        arr[nx][ny] === 0 ||
        isVisit[nx][ny] === true
      )
        continue;
      isVisit[nx][ny] = true;
      queue.push([nx, ny, l + 1]);
      arr[nx][ny] = l + 1;
    }
  }
};

let flag = 0;
for (let i = 0; i < n; i++) {
  if (flag === 1) break;
  for (let j = 0; j < m; j++)
    if (arr[i][j] === 2) {
      BFS(i, j, 0);
      flag = 1;
      break;
    }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (isVisit[i][j] === false && arr[i][j] !== 0) arr[i][j] = -1;
  }
}

console.log(arr.map((it) => it.join(" ")).join("\n"));
