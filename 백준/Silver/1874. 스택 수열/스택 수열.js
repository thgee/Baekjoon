let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, ...arr] = input;
n = Number(n);
arr = arr.map((it) => Number(it.trim()));
// -------------------------------------------------------------------------

// 1. arr을 순회하면서 1~n 중에 arr의 원소와 같은 원소가 등장할 때 까지 push
// 2. 같은 원소가 등장하면 다른 원소가 나올 때 까지 arr.shift()와 stack.pop()을 동시에 진행
// 3. 1, 2번을 계속 반복

let stack = [];
let res = [];
let i = 0,
  j = 0;
while (i < n) {
  while (arr[j] !== i && i < n) {
    stack.push(++i);
    res.push("+");
  }
  while (arr[j] === stack[stack.length - 1] && stack.length !== 0) {
    j++;
    stack.pop();
    res.push("-");
  }
}

if (stack.length === 0) {
  console.log(res.join("\n"));
} else console.log("NO");
