let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
arr.shift();

arr = arr.map((it) =>
  it
    .trim()
    .split(" ")
    .map((it) => Number(it))
);

// -------------------------------------------------------------------

arr.sort((n, p) => {
  if (n[1] !== p[1]) return n[1] - p[1];
  else return n[0] - p[0];
});

console.log(arr.map((it) => `${it[0]} ${it[1]}`).join("\n"));
