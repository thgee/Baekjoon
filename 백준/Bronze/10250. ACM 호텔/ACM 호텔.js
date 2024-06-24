let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => Number(it)));

let T = input.shift();

let res = "";
for (let [H, W, N] of input) {
  res += N % H !== 0 ? String(N % H) : H;

  if (N % H !== 0)
    res +=
      Math.floor(N / H) + 1 < 10
        ? "0" + String(Math.floor(N / H) + 1)
        : String(Math.floor(N / H) + 1);
  else res += Math.floor(N / H) < 10 ? "0" + String(N / H) : String(N / H);
  res += "\n";
}
console.log(res.trim());
