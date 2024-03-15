let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim();

let n = Number(arr);

let res = Array.from({ length: n }, () => Array.from({ length: n }, () => " "));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i; j++) {
    res[i][j] = "*";
  }
}

console.log(
  res.map((it) => it.join("").trim()).join("\n")
);
