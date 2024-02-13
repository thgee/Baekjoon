let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split(" ");

let [n, r, c] = input.map((it) => Number(it));
let i = 0;
let flag = 0;
let dx = [0, 0, 1, 1];
let dy = [0, 1, 0, 1];

const DFS = (n, x, y) => {
  if (flag === 1) return;
  if (n === 1) {
    if (x === r && y === c) {
      flag = 1;
      return;
    } else i++;
    return;
  }
  if (x <= r && x + n > r && y <= c && y + n > c) {
    let nn = n / 2;
    for (let k = 0; k < 4; k++) {
      let nx = x + nn * dx[k];
      let ny = y + nn * dy[k];
      DFS(nn, nx, ny);
    }
  } else i += n * n;
};

DFS(2 ** n, 0, 0);

console.log(i);
