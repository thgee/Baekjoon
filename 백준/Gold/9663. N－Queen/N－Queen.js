let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim();

let N = Number(arr);

let res = 0;

// 체스판
const board = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => 0)
);

// 대각선, 열 을 확인하여 현재 위치에 퀸을 놓아도 되는지 여부를 판단하는 함수
const isPossible = (x, y) => {
  let flag = false;

  // 열 체크
  for (let i = 0; i < x; i++) {
    if (board[i][y] === 1) flag = true;
    if (flag) return false;
  }
  // 대각선 체크 (퀸은 0행부터 N-1행으로 내려가며 놓기 때문에 위쪽으로만 체크하면 됨)

  // 좌상향 대각선
  for (let i = 1; ; i++) {
    if (x - i < 0 || y - i < 0) break;
    if (board[x - i][y - i]) flag = true;
    if (flag) return false;
  }

  // 우상향 대각선
  for (let i = 1; ; i++) {
    if (x - i < 0 || y + i >= N) break;
    if (board[x - i][y + i]) flag = true;
    if (flag) return false;
  }

  return true;
};

const DFS = (x) => {
  if (x === N - 1) {
    res++;
    return;
  }
  for (let y = 0; y < N; y++) {
    if (!isPossible(x + 1, y)) continue;

    board[x + 1][y] = 1;
    DFS(x + 1);
    board[x + 1][y] = 0;
  }
};

DFS(-1);

console.log(res);
