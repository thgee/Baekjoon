let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input.shift());
let res = [];

for (let k = 0, i = 0; k < n; k++) {
  let map = new Map();
  let m = Number(input[i++]);
  let arr = input.slice(i, i + m).map((it) => it.trim().split(" ")[1]);

  for (let x of arr) {
    map.set(x, (map.get(x) || 0) + 1);
  }
  res.push(
    Array.from(map.values()).reduce((acc, cur) => acc * (cur + 1), 1) - 1
  );
  i += m;
}

console.log(res.join("\n"));
