let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((it) => Number(it));

let N = arr.length - 1;
const cost = [
  [0, 2, 2, 2, 2],
  [0, 1, 3, 4, 3],
  [0, 3, 1, 3, 4],
  [0, 4, 3, 1, 3],
  [0, 3, 4, 3, 1],
];

// dp[현재 발판 인덱스][왼발][오른발] = 현재 발판에서 마지막까지 가는데 드는 최소힘
const dp = Array.from({ length: N }, () =>
  Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => 0))
);

const DFS = (i, l, r) => {
  if (i === N) {
    return 0;
  }

  if (dp[i][l][r] !== 0) return dp[i][l][r];

  // 마지막 발판부터 거꾸로 올라오면서 발판을 밟는 힘을 누적하고
  // 최소 힘을 dp에 저장한다.
  return (dp[i][l][r] = Math.min(
    DFS(i + 1, arr[i], r) + cost[l][arr[i]], // 왼발을 움직이는 경우
    DFS(i + 1, l, arr[i]) + cost[r][arr[i]] // 오른발을 움직이는 경우
  ));
};

DFS(0, 0, 0);

console.log(dp[0][0][0]);
