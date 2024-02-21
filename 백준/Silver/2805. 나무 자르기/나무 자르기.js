let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = arr
  .shift()
  .split(" ")
  .map((it) => Number(it));
arr = arr[0].split(" ").map((it) => Number(it));

let l = 0,
  r = Math.max(...arr);
let res = 0;
while (l <= r) {
  let mid = parseInt((l + r) / 2);
  let sum = arr.reduce(
    (acc, cur) => (cur - mid > 0 ? acc + cur - mid : acc),
    0
  );
  if (sum >= m) {
    res = Math.max(res, mid);
    l = mid + 1;
  } else r = mid - 1;
}

console.log(res);
