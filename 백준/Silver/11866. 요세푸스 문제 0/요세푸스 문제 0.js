let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split(" ");
let [n, m] = [Number(arr[0]), Number(arr[1])];

// -------------------------------------------------------------------
let res = [];
let stack = Array.from({ length: n }, (v, k) => k + 1);
let i = m - 1;
while (stack.length > 0) {
  res.push(stack.splice(i, 1));
  i += m - 1;
  i %= stack.length;
}

console.log("<" + res.join(", ") + ">");
