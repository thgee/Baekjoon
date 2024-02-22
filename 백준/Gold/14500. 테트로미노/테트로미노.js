let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
arr = arr.map((it) => it.split(" ").map((it) => Number(it)));
let [n, m] = arr.shift();

let blocks = [
  // o o o o
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
  ],
  // o
  // o
  // o
  // o
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
  ],
  // o o
  // o o
  [
    [0, 0],
    [1, 0],
    [0, 1],
    [1, 1],
  ],
  // o
  // o
  // o o
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [2, 1],
  ],
  //   o
  //   o
  // o o
  [
    [0, 1],
    [1, 1],
    [2, 1],
    [2, 0],
  ],
  //     o
  // o o o
  [
    [0, 2],
    [1, 2],
    [1, 1],
    [1, 0],
  ],
  // o
  // o o o
  [
    [0, 0],
    [1, 2],
    [1, 1],
    [1, 0],
  ],
  // o o
  //   o
  //   o
  [
    [0, 0],
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  // o o
  // o
  // o
  [
    [0, 0],
    [0, 1],
    [1, 0],
    [2, 0],
  ],
  // o o o
  // o
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
  ],
  // o o o
  //     o
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 2],
  ],
  // o o
  //   o o
  [
    [0, 0],
    [0, 1],
    [1, 1],
    [1, 2],
  ],
  //   o o
  // o o
  [
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
  ],
  //   o
  // o o
  // o
  [
    [0, 1],
    [1, 0],
    [1, 1],
    [2, 0],
  ],
  // o
  // o o
  //   o
  [
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 1],
  ],
  //   o
  // o o o
  [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  //   o
  // o o
  //   o
  [
    [0, 1],
    [1, 0],
    [1, 1],
    [2, 1],
  ],
  // o o o
  //   o
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 1],
  ],
  // o
  // o o
  // o
  [
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 0],
  ],
];

let max = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    let cnt = 0;
    for (let b of blocks) {
      let sum = 0;
      for (let k = 0; k < 4; k++) {
        let [nx, ny] = [i + b[k][0], j + b[k][1]];
        if (nx < 0 || nx >= n || ny < 0 || ny >= m) break;
        sum += arr[nx][ny];
      }
      max = Math.max(max, sum);
    }
  }
}

console.log(max);

