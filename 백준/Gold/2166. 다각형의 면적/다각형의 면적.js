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

let [N] = arr[0];
const getArea = (a, b, c) => {
  return (
    Math.abs((b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1])) / 2
  );
};

let sum = 0;

for (let i = 1, j = N; i <= N; i++, j--) {
  if (i === N) sum += arr[i][0] * arr[1][1];
  else sum += arr[i][0] * arr[i + 1][1];

  if (i === N) sum -= arr[1][0] * arr[i][1];
  else sum -= arr[i + 1][0] * arr[i][1];
}

console.log((Math.abs(sum) / 2).toFixed(1));
