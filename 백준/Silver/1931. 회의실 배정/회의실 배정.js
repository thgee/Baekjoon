let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
arr.shift();
arr = arr.map((it) =>
  it
    .trim()
    .split(" ")
    .map((it) => Number(it))
);

arr.sort((n, p) => {
  if (n[1] === p[1]) return n[0] - p[0];
  else return n[1] - p[1];
});

let tmp = 0,
  cnt = 0;
for (let [s, e] of arr) {
  if (tmp <= s) {
    cnt++;
    tmp = e;
  }
}

console.log(cnt);
