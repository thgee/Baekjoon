let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
let arr = input.map((it) => it.trim());
// ------------------------------------------------------------------
let res = [];
for (let str of arr) {
  let flag = 0;
  let stack = [];
  for (let x of str) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) {
        res.push("NO");
        flag = 1;
        break;
      }
      stack.pop();
    }
  }
  if (flag === 1) continue;
  stack.length === 0 ? res.push("YES") : res.push("NO");
}
console.log(res.join("\n"));
