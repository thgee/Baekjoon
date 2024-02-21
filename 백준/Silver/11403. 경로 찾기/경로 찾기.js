let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
arr = arr.map((it) =>
  it
    .trim()
    .split(" ")
    .map((it) => Number(it))
);
let n = Number(arr.shift());

const BFS = (x) => {
  let isVisit = Array.from({ length: n }, () => 0);
  let queue = [x];
  while (queue.length) {
    let v = queue.shift();
    for (let i = 0; i < n; i++) {
      if (arr[v][i] === 1 && isVisit[i] === 0) {
        arr[x][i] = 1;
        isVisit[i] = 1;
        queue.push(i);
      }
    }
  }
};
for (let i = 0; i < n; i++) BFS(i);
console.log(arr.map((it) => it.join(" ")).join("\n"));
