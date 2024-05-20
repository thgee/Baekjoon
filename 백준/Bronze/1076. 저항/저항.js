let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.trim());

const dic = {
  black: [0, 1],
  brown: [1, 10],
  red: [2, 100],
  orange: [3, 1000],
  yellow: [4, 10000],
  green: [5, 100000],
  blue: [6, 1000000],
  violet: [7, 10000000],
  grey: [8, 100000000],
  white: [9, 1000000000],
};

res = "";
for (let i = 0; i < input.length; i++) {
  if (i != 2) res += String(dic[input[i]][0]);
  else res += String(dic[input[i]][1]).slice(1);
}

console.log(Number(res));
