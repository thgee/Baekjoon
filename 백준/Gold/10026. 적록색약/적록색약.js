let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let arr1 = fs.readFileSync(filePath).toString().trim().split("\n");
let n = Number(arr1.shift());
arr1 = arr1.map((it) => it.trim().split(""));

// 이미 방문한 노드는 0으로 바꿔주기

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

const BFS = (arr, x, y) => {
  let color = arr[x][y];
  let queue = [[x, y]];
  while (queue.length) {
    let v = queue.shift();
    for (let i = 0; i < 4; i++) {
      let nv = [v[0] + dx[i], v[1] + dy[i]];
      if (
        nv[0] < 0 ||
        nv[0] >= n ||
        nv[1] < 0 ||
        nv[1] >= n ||
        arr[nv[0]][nv[1]] !== color
      )
        continue;
      queue.push(nv);
      arr[nv[0]][nv[1]] = 0;
    }
  }
};

let arr2 = Array.from({ length: n }, () => Array(n).fill(0));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    arr2[i][j] = arr1[i][j];
    if (arr1[i][j] === "R") arr2[i][j] = "G";
  }
}

let cnt1 = 0;
let cnt2 = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr1[i][j] !== 0) {
      BFS(arr1, i, j);
      cnt1++;
    }
    if (arr2[i][j] !== 0) {
      BFS(arr2, i, j);
      cnt2++;
    }
  }
}
console.log(cnt1, cnt2);
