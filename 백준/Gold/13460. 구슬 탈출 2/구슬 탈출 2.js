// 탐색할 때 빨간공이 먼저 움직일지, 파란공이 먼저 움직일지를 이동할 방향과 각 공의 좌표에 따라 정한다.
// 빨간공과 파란공을 정해진 순서대로 이동시킨다.
// 파란공이 구멍에 빠졌다면 정답이 아니므로 넘어간다.
// 빨간공만 구멍에 빠졌다면 정답이므로 탐색을 멈춘다.
// 빨간공과 파란공의 기울여서 움직인 좌표가 움직이기 전과 같다면, 큐에 넣지 않는다.

let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.trim());
let [N, M] = arr
  .shift()
  .split(" ")
  .map((it) => Number(it));

const offset = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const moveCursor = (cp, op, dx, dy) => {
  let [x, y] = cp.slice();
  while (1) {
    // 구멍을 만나면 구멍의 위치를 반환
    if (arr[x][y] === "O") return [x, y];
    // 벽이나 다른 공을 만나면 벽 앞의 위치를 반환
    else if (
      arr[x][y] === "#" ||
      (x === op[0] && y === op[1] && arr[op[0]][op[1]] !== "O")
    )
      return dx !== 0 ? [x - dx, y] : [x, y - dy];
    x += dx;
    y += dy;
  }
};

// 먼저 움직일 구슬 선택 (1 : r먼저, 0 : b먼저)
const getFirstBall = (rp, bp, dx, dy) => {
  let flag = 1;
  // 가로선상에 있는 경우
  if (rp[0] === bp[0]) {
    // b r 인 경우
    if (bp[1] < rp[1]) {
      // 오른쪽이동
      if (dy === 1) flag = 1;
      //왼쪽이동
      if (dy === -1) flag = 0;
    }

    // r b 인 경우
    if (bp[1] > rp[1]) {
      // 오른쪽이동
      if (dy === 1) flag = 0;
      //왼쪽이동
      if (dy === -1) flag = 1;
    }
  }

  // 세로선상에 있는 경우
  else if (rp[1] === bp[1]) {
    // r
    // b 인 경우
    if (bp[0] > rp[0]) {
      // 위 이동
      if (dx === -1) flag = 1;
      // 아래 이동
      if (dx === 1) flag = 0;
    }

    // b
    // r 인 경우
    if (bp[0] < rp[0]) {
      // 위 이동
      if (dx === -1) flag = 0;
      // 아래 이동
      if (dx === 1) flag = 1;
    }

    return flag;
  }

  // 뭘 먼저 움직이든 상관 없는 경우 아무거나 반환
  return flag;
};

const BFS = (rp, bp) => {
  const queue = [[rp, bp, 0]];
  while (queue.length) {
    let [rp, bp, cnt] = queue.shift();

    if (cnt === 10) return -1;

    for (let [dx, dy] of offset) {
      // 먼저 움직일 구슬 선택 (1 : r먼저, 0 : b먼저)
      let whichFrist = getFirstBall(rp, bp, dx, dy);

      // 구슬 이동
      let nrp, nbp;
      if (whichFrist === 1) {
        nrp = moveCursor(rp, bp, dx, dy);
        nbp = moveCursor(bp, nrp, dx, dy);
      } else {
        nbp = moveCursor(bp, rp, dx, dy);
        nrp = moveCursor(rp, nbp, dx, dy);
      }

      // 두 공 모두 이동하지 않았다면 continue
      if (
        nrp[0] === rp[0] &&
        nrp[1] === rp[1] &&
        nbp[0] === bp[0] &&
        nbp[1] === bp[1]
      )
        continue;
      if (arr[nbp[0]][nbp[1]] === "O")
        // 파란공이 구멍에 들어가면 해당 방향 탐색 중단
        continue;

      // 빨간공이 구멍에 들어가면 종료
      if (arr[nrp[0]][nrp[1]] === "O") {
        return cnt + 1;
      }

      queue.push([nrp, nbp, cnt + 1]);
    }
  }
  return -1;
};

let rp, bp;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === "R") rp = [i, j];
    if (arr[i][j] === "B") bp = [i, j];
  }
}
let res = BFS(rp, bp);

console.log(res);
