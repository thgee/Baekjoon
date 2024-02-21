let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
let N = arr.shift();
arr = arr.map((it) =>
  it
    .trim()
    .split(" ")
    .map((it) => Number(it))
);

const GCD = (a, b) => b % a === 0 || GCD(b % a, a);

const LCM = (a, b) => (a * b) / GCD(a, b);
let res = [];

for (let line of arr) {
  let [M, N, x, y] = line;
  let lcm = LCM(M, N);
  let flag = 0;
  for (let i = x; i <= lcm; i += M) {
    let ty = i % N;
    if (ty === 0) ty = N;
    if (ty === y) {
      res.push(i);
      flag = 1;
      break;
    }
  }
  if (flag === 0) res.push(-1);
}

console.log(res.join("\n"));
