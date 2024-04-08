let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
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

let [[N, X], [...arr]] = input;

let maxVisit = 0;
let maxPeriod = 0;
let sum = arr.slice(0, X).reduce((acc, cur) => acc + cur, 0);
for (let i = 0, j = X - 1; j < N; ) {
  if (maxVisit < sum) {
    maxVisit = sum;
    maxPeriod = 0;
  }
  if (maxVisit === sum) {
    maxPeriod++;
  }
  sum -= arr[i++];
  sum += arr[++j];
}

if (maxVisit !== 0) {
  console.log(maxVisit);
  console.log(maxPeriod);
} else console.log("SAD");
