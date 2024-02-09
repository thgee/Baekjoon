let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();

let arr = input.map((it) => Number(it));
// ------------------------------------------------------------------
let stack = [];
for (let x of arr) {
  if (x === 0) stack.pop();
  else stack.push(x);
}

console.log(stack.reduce((acc, cur) => acc + cur, 0));
