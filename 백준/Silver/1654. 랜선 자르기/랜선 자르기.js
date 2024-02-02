let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [k, n] = input[0].split(" ");
let [...arr] = input.slice(1);
arr = arr.map((it) => parseInt(it.trim()));
// -------------------------------------------------------------------------

// l = 1, r = Math.max(...arr) 초기화
// 이진탐색으로 랜선 하나의 길이를 선택하면서 (mid = Number((l + r) / 2))
//    arr의 각각의 원소에서 더 이상 뺄 수 없을때까지 빼면서 카운트
// cnt >= n 이면 성공 -> l = mid + 1
// cnt < n 이면 실패 -> r = mid - 1

const isOk = (len) => {
  let cnt = 0;
  for (let x of arr) {
    while (x - len >= 0) {
      x -= len;
      cnt++;
    }
  }
  return cnt >= n ? true : false;
};

let l = 1,
  r = Math.max(...arr);
let res = 0;
while (l <= r) {
  let mid = parseInt((l + r) / 2);
  if (isOk(mid)) {
    res = mid;
    l = mid + 1;
  } else r = mid - 1;
}

console.log(res);
