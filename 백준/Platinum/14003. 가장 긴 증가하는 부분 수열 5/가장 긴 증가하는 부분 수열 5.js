let fs = require("fs");
const { listenerCount } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map((it) => it.split(" ").map((it) => Number(it)));
let [N, arr] = input;

const lis = [];
const record = [];
const res = [];

const binarySearch = (x) => {
  let l = 0,
    r = lis.length - 1;
  let mid;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (lis[mid] > x) r = mid - 1;
    else if (lis[mid] < x) l = mid + 1;
    else return mid;
  }
  return r + 1;
};

for (let i = 0; i < N; i++) {
  let idx = binarySearch(arr[i]);
  lis[idx] = arr[i];
  record[i] = idx;
}

for (let i = record.length - 1, j = lis.length - 1; i >= 0; i--) {
  if (record[i] === j) {
    res.push(arr[i]);
    j--;
  }
}
console.log(lis.length);
console.log(res.reverse().join(" "));
