let fs = require("fs");
const { Interface } = require("readline");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arrr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => Number(it)));

let [[N, X], arr] = arrr;

console.log(arr.filter((i) => i < X).join(" "));
