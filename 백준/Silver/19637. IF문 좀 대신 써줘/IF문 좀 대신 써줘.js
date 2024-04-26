let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input
  .shift()
  .split(" ")
  .map((it) => Number(it));

let level = input.slice(0, N);
let player = input.slice(N, N + M);
level = level.map((it) =>
  it.split(" ").map((it, idx) => (idx === 1 ? Number(it) : it))
);
player = player.map((it) => Number(it));

const binarySearch = (arr, t) => {
  let l = 0,
    r = arr.length;
  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid][1] < t) l = mid + 1;
    else r = mid;
  }
  return arr[l][0];
};

let res = [];
for (let i = 0; i < M; i++) {
  res.push(binarySearch(level, player[i]));

  // res.push(level[idx >= N ? idx - 1 : idx][0]);
}

console.log(res.join("\n"));
