// 원소 하나 고정하고 나머지 원소로 투포인터 돌리면서 절댓값이 최소인 합 찾기

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

const [N, arr] = input;

arr.sort((n, p) => n - p);

let min = Number.MAX_SAFE_INTEGER;
let res = [];
for (let i = 0; i < N; i++) {
  let l = i + 1,
    r = N - 1;

  while (1) {
    if (r === i) r--;
    if (l === i) l++;
    if (l >= r) break;
    let sum = arr[i] + arr[l] + arr[r];
    if (min > Math.abs(sum)) {
      min = Math.abs(sum);
      res = [];
      res.push(arr[i], arr[l], arr[r]);
    }
    if (sum > 0) r--;
    else if (sum < 0) l++;
    else break;
  }
  if (min === 0) break;
}

console.log(res.sort((n, p) => n - p).join(" "));
