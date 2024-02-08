let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(/ |\n/);
let n = Number(input.shift());

// ------------------------------------------------------------------

let stack = [];
let res = [];
for (let i = 0; i < input.length; i++) {
  switch (input[i]) {
    case "pop":
      res.push(stack.pop() || -1);
      break;
    case "push":
      stack.push(Number(input[++i]));
      break;
    case "top":
      res.push(stack.length - 1 !== -1 ? stack[stack.length - 1] : -1);

      break;
    case "size":
      res.push(stack.length);
      break;
    case "empty":
      res.push(stack.length ? 0 : 1);
      break;
  }
}

console.log(res.join("\n"));
