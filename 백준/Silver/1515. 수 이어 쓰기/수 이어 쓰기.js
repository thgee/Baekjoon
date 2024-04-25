let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("")
  .map((it) => Number(it));

let res = 0;
for (let i = 0; i < arr.length; ) {
  res++;
  let tmp = String(res)
    .split("")
    .map((it) => Number(it));
  for (let j = 0; j < tmp.length; ) {
    if (arr[i] === tmp[j]) i++;
    j++;
  }
}

console.log(res);
