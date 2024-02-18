let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, m] = arr.shift().trim().split(" ");
arr = arr.map((it) =>
  it
    .trim()
    .split("")
    .map((it) => Number(it))
);
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
const BFS = () => {
  let queue = [[0, 0, 1]];
  arr[0][0] = 0;
  while (queue.length) {
    let [x, y, cnt] = queue.shift();
    if (x === n - 1 && y === m - 1) return cnt;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m || arr[nx][ny] === 0) continue;
      arr[nx][ny] = 0;
      queue.push([nx, ny, cnt + 1]);
    }
  }
};

console.log(BFS());
