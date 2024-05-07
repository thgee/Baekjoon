let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.trim());

input.pop();
let res = [];
for (let tc = 0; tc < input.length; ) {
  const N = Number(input[tc++]);
  const student = input.slice(tc, tc + N);
  tc += N;
  const map = new Map();
  for (let i = tc; i < tc + 2 * N - 1; i++) {
    let [num, flag] = input[i].split(" ");
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (let [k, v] of map) {
    if (v === 1) {
      res.push(student[Number(k) - 1]);
    }
  }
  tc += 2 * N - 1;
}

console.log(res.map((v, i) => `${i + 1} ${v}`).join("\n"));
