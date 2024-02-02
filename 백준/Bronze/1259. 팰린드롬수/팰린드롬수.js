let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [...arr] = input;
arr = arr.map((it) => Number(it.trim()));
arr.pop();

// -------------------------------------------------------------------------

for (let i = 0; i < arr.length; i++) {
  let res = 0;
  let tmp = arr[i];
  while (tmp) {
    res = res * 10 + (tmp % 10);
    tmp = parseInt(tmp / 10);
  }
  console.log(res === arr[i] ? "yes" : "no");
}
