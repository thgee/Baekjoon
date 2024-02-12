let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
let n = Number(input);
// -------------------------------------------------------------------------

const DFS = (n) => {
  if (n === 0) return 1;
  return BigInt(n) * BigInt(DFS(n - 1));
};

let num = DFS(n);
let cnt = 0;
num = num.toString();
for (let i = num.length - 1; ; i--) {
  if (num[i] !== "0") break;
  cnt++;
}
console.log(cnt);
