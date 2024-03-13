let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let arr = fs.readFileSync(filePath).toString().trim().split("\n");
let N = fs.readFileSync(filePath).toString();
N = Number(N);

let res = Array.from({ length: N }, () =>
  Array.from({ length: N * 2 - 1 }, () => " ")
);

const model = ["  *  ", " * * ", "*****"];
const DFS = (x, y, n) => {
  if (n === 3) {
    for (let i = 0; i < 3; i++)
      for (let j = -2; j <= 2; j++) res[x + i][y + j] = model[i][2 + j];
    return;
  }
  DFS(x, y, n / 2);
  DFS(x + n / 2, y - n / 2, n / 2);
  DFS(x + n / 2, y + n / 2, n / 2);
};

DFS(0, N - 1, N);

console.log(res.map((it) => it.join("")).join("\n"));
