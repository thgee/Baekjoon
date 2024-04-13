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

let [N] = arr.shift();
let res = [];
for (let l of arr) {
  let cnt = 0;
  let k = l.shift();
  let line = [];
  for (let i = 0; i < 20; i++) {
    let j = line.length;
    while (1) {
      if (j === 0) break;
      if (line[j - 1] > l[i]) {
        j--;
        cnt++;
      } else break;
    }
    line.splice(j, 0, l[i]);
  }

  res.push([k, cnt]);
}

console.log(res.map((it) => it.join(" ")).join("\n"));
