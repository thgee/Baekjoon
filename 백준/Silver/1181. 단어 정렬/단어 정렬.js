let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, ...arr] = input;
arr = arr.map((it) => it.trim());

// -------------------------------------------------------------------------

arr = Array.from(new Set(arr));

arr.sort((next, prev) => {
  if (next.length !== prev.length) return next.length - prev.length;
  else {
    return next > prev ? 1 : -1;
  }
});

for (let x of arr) console.log(x);
