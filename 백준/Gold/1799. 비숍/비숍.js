// 대각선당 하나의 비숍을 둘 수 있다.
// 우상향 대각선으로 나눈 후에 각 대각선마다 가능한 칸에 비숍을 둔다.
// 가능한 칸인지 판단하는 기준은 비숍을 두기 전에 좌상향 대각선에 다른 비숍이 있는지 확인한다.

let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => Number(it)));

let [N] = arr.shift();

const isPossible = (x, y) => {
  if (arr[x][y] === 0) return false;

  for (let i = 1; ; i++) {
    let nx = x - i;
    ny = y - i;
    if (nx < 0 || ny < 0) break;
    if (arr[nx][ny] === 2) return false; // 대각선에 비숍이 있다면 false 반환
  }

  return true;
};

const bishop = (l, cnt) => {
  let max = Number.MIN_SAFE_INTEGER;

  const DFS = (l, cnt) => {
    if (l <= -N) {
      // 종료조건 : 모든 대각선을 탐색한 경우
      max = Math.max(max, cnt);
      return;
    }
    DFS(l - 2, cnt); // 비숍을 해당 대각선에 놓지 않고 넘어감
    if (l >= 0) {
      for (let i = 0; i < N - l; i++) {
        let nx = i,
          ny = N - 1 - l - i;
        if (!isPossible(nx, ny)) continue;
        arr[nx][ny] = 2; // 비숍을 해당 위치에 놓음
        DFS(l - 2, cnt + 1);
        arr[nx][ny] = 1;
      }
    } else {
      for (let i = N - 1, j = -l; i >= -l, j <= N - 1; i--, j++) {
        let nx = i,
          ny = j;

        if (!isPossible(nx, ny)) continue;
        arr[nx][ny] = 2; // 비숍을 해당 위치에 놓음
        DFS(l - 2, cnt + 1);
        arr[nx][ny] = 1;
      }
    }
  };

  DFS(l, cnt);
  return max;
};

let res = bishop(N - 1, 0) + bishop(N - 2, 0);

console.log(res);
