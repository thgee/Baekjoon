let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split(" ");

let [a, b, c] = arr.map((it) => BigInt(it));

const DFS = (a, b) => {
  if (b === 1n) return a % c;
  let half = BigInt(DFS(a, b / 2n));
  return b % 2n === 1n ? (half ** 2n * a) % c : half ** 2n % c;
};

console.log(parseInt(DFS(a, b) % c));
