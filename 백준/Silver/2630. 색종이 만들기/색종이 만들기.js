let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(arr.shift());
arr = arr.map((it) =>
  it
    .trim()
    .split(" ")
    .map((it) => Number(it))
);

let whiteCnt = 0,
  blueCnt = 0;
const DFS = (x, y, n) => {
  if (n === 1) {
    return arr[x][y];
  }
  let dx = [0, 0, 1, 1];
  let dy = [0, 1, 0, 1];
  let tmp = [];
  for (let i = 0; i < 4; i++) {
    tmp.push(DFS(x + dx[i] * (n / 2), y + dy[i] * (n / 2), n / 2));
  }
  let sum = tmp.reduce((acc, cur) => acc + cur, 0);
  if (sum === 4) return 1;
  else if (sum === 0) return 0;
  else {
    tmp.map((it) => {
      if (it === 1) blueCnt++;
      else if (it === 0) whiteCnt++;
    });
    return 100;
  }
};

DFS(0, 0, n);
if (whiteCnt === 0 && blueCnt === 0) arr[0][0] === 1 ? blueCnt++ : whiteCnt++;
console.log(whiteCnt);
console.log(blueCnt);
