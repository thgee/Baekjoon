let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((it) => Number(it));

  let res = 0;
  let i = arr[0], j = arr[1], k = arr[2];
  if(i === j && j  === k) res += 10000 + i * 1000
  else if (i === j) res += 1000 + i * 100
  else if (j === k) res += 1000 + j * 100
  else if (k === i) res += 1000 + k * 100
  else res += Math.max(i, j, k) * 100;

  console.log(res);