let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) =>
    it
      .trim()
      .split(" ")
      .map((it) => Number(it))
  );

arr.pop();
const res = [];
for (let [a, b] of arr) {
  res.push(a > b ? "Yes" : "No");
}

console.log(res.join("\n"));
