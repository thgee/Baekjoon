let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.trim());

let [s1, s2] = arr;
let stack = [];
for (let i = 0; i < s1.length; i++) {
  let j = s2.length - 1;
  stack.push(s1[i]);

  // s2의 마지막 문자가 push 되면
  if (stack[stack.length - 1] === s2[j]) {
    let k = stack.length - 1;

    while (stack[k] === s2[j]) {
      if (j === 0) {
        // s2가 모두 스택에 들어있었다면 제거
        stack.splice(k, s2.length);
        break;
      }
      k--;
      j--;
    }
  }
}

console.log(stack.length ? stack.join("") : "FRULA");
