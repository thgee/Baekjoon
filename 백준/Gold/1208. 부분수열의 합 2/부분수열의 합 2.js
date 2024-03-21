const { time } = require("console");
const { subscribe } = require("diagnostics_channel");
let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => Number(it)));
let [N, S] = input.shift();
let arr = input.shift();

const subSum1 = [],
  subSum2 = [];

let res = 0;

const DFS = (s, e, sum, subSum) => {
  subSum.push(sum);
  for (let i = s + 1; i < e; i++) {
    DFS(i, e, sum + arr[i], subSum);
  }
};
DFS(-1, Math.floor(N / 2), 0, subSum1);
DFS(Math.floor(N / 2) - 1, N, 0, subSum2);

subSum1.sort((n, p) => n - p);
subSum2.sort((n, p) => p - n);
let i = 0,
  j = 0;
while (i < subSum1.length && j < subSum2.length) {
  if (subSum1[i] + subSum2[j] === S) {
    let tmp1 = 1,
      tmp2 = 1;
    while (subSum1[i] === subSum1[i + 1]) {
      tmp1++;
      i++;
    }
    while (subSum2[j] === subSum2[j + 1]) {
      tmp2++;
      j++;
    }
    res += tmp1 * tmp2;
    i++;
    j++;
  }
  while (i < subSum1.length && subSum1[i] + subSum2[j] < S) i++;
  while (j < subSum2.length && subSum1[i] + subSum2[j] > S) j++;
}

if (S === 0) res--; // 공집합 제거
console.log(res);
