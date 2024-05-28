let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((it) => Number(it));

const [N, M] = input;

const isVisit = Array.from({ length: N + 1 }, () => 0);
let res = [];
const DFS = (path, L) => {
  if (L === M) {
    res.push(path.trim());
    return;
  }
  for (let i = 1; i <= N; i++) {
    if (isVisit[i]) continue;
    isVisit[i] = 1;
    DFS(path + `${String(i)} `, L + 1);
    isVisit[i] = 0;
  }
};

DFS("", 0);

console.log(res.join("\n"));
