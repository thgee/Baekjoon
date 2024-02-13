let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = Number(input.shift());
input = input.map((it) =>
  it
    .trim()
    .split(" ")
    .map((it) => Number(it))
);

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

const BFS = (arr, x, y, N, M) => {
  let queue = [[x, y]];
  while (queue.length) {
    let v = queue.shift();
    for (let i = 0; i < 4; i++) {
      let nv = [v[0] + dx[i], v[1] + dy[i]];
      if (
        nv[0] < 0 ||
        nv[0] >= N ||
        nv[1] < 0 ||
        nv[1] >= M ||
        arr[nv[0]][nv[1]] !== 1
      )
        continue;
      queue.push(nv);
      arr[nv[0]][nv[1]] = 0;
    }
  }
};
for (let i = 0, l = 0; i < n; i++) {
  let cnt = 0;
  let [M, N, K] = input[l++];
  let arr = Array.from({ length: N }, () => Array(M).fill(0));
  for (let k = 0; k < K; k++) {
    arr[input[l][1]][input[l][0]] = 1;
    l++;
  }
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (arr[x][y] === 0) continue;
      BFS(arr, x, y, N, M);
      cnt++;
    }
  }
  console.log(cnt);
}
