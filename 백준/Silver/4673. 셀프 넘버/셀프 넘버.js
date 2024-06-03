// let fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n")
//   .map((it) => it.split(" ").map((it) => Number(it)));

const N = 10000;

const arr = Array.from({ length: N + 1 }, (v, i) => i);
for (let i = 1; i <= N; i++) {
  let strNum = i.toString();
  let convert = i;
  for (let x of strNum) {
    convert += Number(x);
  }
  arr[convert] = false;
}

console.log(arr.filter((it) => it).join("\n"));
