let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();
// ------------------------------------------------------------------

const checkBracket = (str) => {
  let stack = [];
  for (let x of str) {
    if (x === "(" || x === "[") stack.push(x);
    if (x === ")") {
      if (stack.pop() !== "(") return "no";
    }
    if (x === "]") {
      if (stack.pop() !== "[") return "no";
    }
  }
  if (stack.length !== 0) return "no";
  return "yes";
};

let res = [];
for (let str of input) {
  res.push(checkBracket(str));
}

console.log(res.join("\n"));
