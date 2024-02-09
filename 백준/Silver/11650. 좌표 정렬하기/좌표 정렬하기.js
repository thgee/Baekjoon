let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
let n = Number(arr.shift());
arr = arr.map((it) =>
  it
    .trim()
    .split(" ")
    .map((it) => Number(it))
);

// ------------------------------------------------------------------
arr.sort((next, prev) => {
  if (next[0] === prev[0]) return next[1] - prev[1];
  else return next[0] - prev[0];
});

console.log(arr.map(it=>`${it[0]} ${it[1]}`).join("\n"));
