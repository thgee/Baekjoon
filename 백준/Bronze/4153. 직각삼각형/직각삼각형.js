let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();
arr = input.map((it) => it.trim().split(" "));

// ------------------------------------------------------------------

let res = [];
for (let l of arr) {
  l = l.map((it) => Number(it));
  l.sort((next, prev) => prev - next);
  l[0] ** 2 === l[1] ** 2 + l[2] ** 2 ? res.push("right") : res.push("wrong");
}
console.log(res.join("\n"));
