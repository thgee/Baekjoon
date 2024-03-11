let fs = require("fs");
const { isKeyObject } = require("util/types");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim();

stack = [];
res = [];

const calcPriority = (x) => {
  let res;
  if (x === "+" || x === "-") res = 1;
  if (x === "*" || x === "/") res = 2;
  return res;
};

for (let x of arr) {
  if (x >= "A" && x <= "Z") res.push(x);
  else if (x === "(") stack.push(x);
  else if (x === ")") {
    while (1) {
      let tmp = stack.pop();
      if (tmp === "(") break;
      res.push(tmp);
    }
  } else {
    let curP = calcPriority(x);
    while (1) {
      let topP = calcPriority(stack[stack.length - 1]);
      if (curP <= topP) res.push(stack.pop());
      else {
        stack.push(x);
        break;
      }
    }
  }
}
while (stack.length > 0) res.push(stack.pop());
console.log(res.join(""));
