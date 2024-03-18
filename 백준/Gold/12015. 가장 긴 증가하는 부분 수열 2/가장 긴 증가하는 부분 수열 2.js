let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map((it) => it.split(" ").map((it) => Number(it)));
let [N, arr] = input;

const lis = [];

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
  lis[binarySearch(arr[i])] = arr[i];
}
console.log(lis.length);
