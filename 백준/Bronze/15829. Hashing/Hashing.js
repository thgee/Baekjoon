let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();

// ------------------------------------------------------------------
for (let i = 0; i < input[0].length; i++) {
  (input[0][i].charCodeAt() - "a".charCodeAt() + 1) * 31 ** i;
}
console.log(
  input[0]
    .split("")
    .reduce(
      (acc, cur, idx) =>
        acc + (cur.charCodeAt() - "a".charCodeAt() + 1) * 31 ** idx,
      0
    )
);
