let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => Number(it)));

let [[N, S, P], arr] = input;

let res;

const solution = () => {
  if (N === 0) {
    res = 1;
    return;
  }
  const binarySearch = (n) => {
    let l = 0,
      r = N;
    while (l < r) {
      let mid = Math.floor((l + r) / 2);

      if (n > arr[mid]) r = mid;
      else l = mid + 1;
    }
    return l;
  };

  let idx = binarySearch(S);
  if (idx + 1 > P) {
    res = -1;
    return;
  }

  arr.splice(idx, 1, S);

  const getRank = (idx) => {
    const rank = Array.from({ length: arr.length }, () => 1);
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] < arr[j]) rank[i]++;
      }
    }
    return rank[idx];
  };

  res = getRank(idx);
};

solution();
console.log(res);
