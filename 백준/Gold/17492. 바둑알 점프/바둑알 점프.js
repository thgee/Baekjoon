let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
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

let [N] = arr.shift();

const offset = [
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
];
let flag = false;
let stoneCnt = 0;
const getStoneNum = () => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === 2) stoneCnt++;
    }
  }
};

const DFS = (cnt) => {
  // 돌이 하나남으면 종료
  if (cnt === 1) {
    flag = true;
    return;
  }

  // 벽 안쪽만 순회
  for (let x = 1; x < N - 1; x++) {
    for (let y = 1; y < N - 1; y++) {
      // 바둑알을 만나면 해당 바둑알로부터 점프 시작

      if (arr[x][y] === 2) {
        for (let [dx, dy] of offset) {
          // tx, ty는 밟고 넘어갈 바둑알 위치
          let tx = x + dx,
            ty = y + dy;
          // nx, ny는 착지할 위치
          let nx = x + dx * 2,
            ny = y + dy * 2;

          // 벽이면 점프못함
          if (nx <= 0 || nx >= N - 1 || ny <= 0 || ny >= N - 1) continue;
          // 밟을 돌 없으면 점프 못함
          if (arr[tx][ty] !== 2) continue;
          if (arr[nx][ny] === 2) continue;

          // 점프 !
          arr[x][y] = 0;
          arr[tx][ty] = 0;
          arr[nx][ny] = 2;
          DFS(cnt - 1);

          if (flag) return;

          // 백트래킹
          arr[tx][ty] = 2;
          arr[x][y] = 2;
          arr[nx][ny] = 0;
        }
      }
    }
  }
};

getStoneNum();
DFS(stoneCnt);

console.log(flag ? "Possible" : "Impossible");
