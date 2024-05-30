let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => Number(it)));

const [N] = input.shift();

let res = [];
for (let [s, e] of input) {
  let dist = e - s;
  let cnt = 0;
  let curDist = 0;

  for (let i = 1; ; i++) {
    cnt++;
    curDist += i;
    if (dist <= curDist) {
      res.push(cnt);
      break;
    } else {
      cnt++;
      curDist += i;
      if (dist <= curDist) {
        res.push(cnt);
        break;
      }
    }
  }
}
console.log(res.join("\n"));

// e - s = dist
// (e - s) / 2

//
// 1~11 1 2 3 3 2 1
// 2 4 6
// 양쪽을 더하면서 순회하다가

// 한 발만 더 갔는데 dist와 같다면 즉시 종료
// 한 발 갔는데 dist보다 작다면 두 발 가기
//  두 발 갔는데 dist랑 같다면 즉시 종료
//  두 발 갔는데 dist보다 크다면 즉시 종료
//  두 발 갔는데 dist보다 작다면 다시 반복
// 한 발 갔는데 dist보다 크다면 즉시 종료
// 한 발 갔는데
// 두 발 갔는데

//   dist와 같다면 즉시종료
//   dist보다 크다면 cnt++ 후 종료
