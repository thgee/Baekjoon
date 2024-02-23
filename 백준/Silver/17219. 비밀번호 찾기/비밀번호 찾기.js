let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input
  .shift()
  .split(" ")
  .map((it) => Number(it));
let note = {};
for (let [site, pw] of input.slice(0, n).map((it) => it.trim().split(" "))) {
  note[site] = pw;
}

let res = [];
for (let x of input.slice(n, n + m).map((it) => it.trim())) {
  res.push(note[x]);
}

console.log(res.join("\n"));
