let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, arr1, m, arr2] = input;
[n, m] = [Number(n), Number(m)];
arr1 = arr1
  .trim()
  .split(" ")
  .map((it) => Number(it));
arr2 = arr2
  .trim()
  .split(" ")
  .map((it) => Number(it));

// ------------------------------------------------------------------

const res = [];
arr1.sort((next, prev) => next - prev);

for (let x of arr2) {
  let l = 0,
    r = m - 1;
  while (1) {
    if (l > r) {
      res.push(0);
      break;
    }
    let mid = parseInt((l + r) / 2);
    if (x === arr1[mid]) {
      res.push(1);
      break;
    }
    if (x > arr1[mid]) l = mid + 1;
    else r = mid - 1;
  }
}

console.log(res.join("\n"));
