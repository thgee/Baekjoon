let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.trim());
let N = Number(arr.shift());

let heart = [];
let body = [];

const getHeartPos = () => {
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (arr[x][y] === "*") {
        heart.push(x + 1, y);
        return;
      }
    }
  }
};

const getLen = (x, y, dx, dy) => {
  let cnt = 1;
  while (1) {
    x += dx;
    y += dy;
    if (x < 0 || x >= N || y < 0 || y >= N || arr[x][y] === "_") return cnt;
    cnt++;
  }
};
getHeartPos();
body.push(
  getLen(heart[0], heart[1] - 1, 0, -1),
  getLen(heart[0], heart[1] + 1, 0, 1)
);
let bodyLen = getLen(heart[0] + 1, heart[1], 1, 0);
body.push(bodyLen);
body.push(
  getLen(heart[0] + bodyLen + 1, heart[1] - 1, 1, 0),
  getLen(heart[0] + bodyLen + 1, heart[1] + 1, 1, 0)
);

console.log(heart.map((it) => it + 1).join(" "));
console.log(body.join(" "));
