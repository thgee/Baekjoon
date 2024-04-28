let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => Number(it)));

let [H, M, S] = arr.shift();
const [cook] = arr.shift();

S += cook;
M += Math.floor(S / 60);
S %= 60;
H += Math.floor(M / 60);
M %= 60;
H %= 24;

console.log(H, M, S);
