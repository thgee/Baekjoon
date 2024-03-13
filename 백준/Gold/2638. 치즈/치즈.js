// 치즈 부분을 5으로 초기화한다.
// 치즈의 외부를 BFS로 탐색하면서 치즈와 닿는 부분이 있다면 (치즈 - 1)을 한다.
// BFS를 한 바퀴 돌 때 마다 치즈가 3 이하가 된 부분은 0으로 바꿔주고, 4 이상인 부분은 다시 5로 초기화해준다.
// 치즈가 4 이상인 부분이 없을 때 까지 BFS를 진행하고, 마지막에 BFS 실행 횟수를 출력한다.

let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
arr = arr.map((it) => it.split(" ").map((it) => Number(it)));

let [N, M] = arr.shift();

class Queue {
  constructor() {
    this.data = [];
    this.head = 0;
    this.tail = 0;
    this.length = 0;
  }

  shift() {
    this.length--;
    return this.data[this.head++];
  }

  push(data) {
    this.data[this.tail++] = data;
    this.length++;
  }
}

const offset = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const BFS = () => {
  const isVisit = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => false)
  );
  isVisit[0][0] = true;
  const queue = new Queue();
  queue.push([0, 0]);
  while (queue.length) {
    let [x, y] = queue.shift();
    for (let [dx, dy] of offset) {
      let nx = x + dx,
        ny = y + dy;

      if (nx < 0 || nx >= N || ny < 0 || ny >= M || isVisit[nx][ny]) continue;
      if (arr[nx][ny] !== 0) {
        arr[nx][ny]--;
        continue;
      }
      isVisit[nx][ny] = true;
      queue.push([nx, ny]);
    }
  }
};

let cnt = 0;

for (let i = 0; i < N; i++)
  for (let j = 0; j < M; j++) if (arr[i][j] === 1) arr[i][j] = 5;
while (1) {
  let flag = true;
  for (let i = 0; i < N; i++)
    for (let j = 0; j < M; j++) {
      if (arr[i][j] <= 3) arr[i][j] = 0;
      if (arr[i][j] >= 4) {
        arr[i][j] = 5;
        flag = false;
      }
    }
  if (flag) break;
  BFS();
  cnt++;
}

console.log(cnt);
