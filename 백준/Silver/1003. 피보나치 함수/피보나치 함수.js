let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
arr.shift();

arr = arr.map((it) => Number(it));

// -------------------------------------------------------------------
let res = [];
for (let x of arr) {
  let DP = Array.from({ length: x + 1 }, () => [0, 0]);
  DP[0] = [1, 0];
  DP[1] = [0, 1];
  for (let i = 2; i <= x; i++)
    DP[i] = [DP[i - 1][0] + DP[i - 2][0], DP[i - 1][1] + DP[i - 2][1]];
  res.push(`${DP[x][0]} ${DP[x][1]}`);
}

console.log(res.join("\n"));
