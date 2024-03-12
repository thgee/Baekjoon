let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

class Queue {
  constructor() {
    this.data = [];
    this.head = 0;
    this.tail = 0;
    this.length = 0;
  }

  push(data) {
    this.data[this.tail++] = data;
    this.length++;
  }

  shift() {
    this.length--;
    return this.data[this.head++];
  }
}

let [N, M] = arr
  .shift()
  .split(" ")
  .map((it) => Number(it));

arr = arr.map((it) => it.split("").map((it) => Number(it)));

const offset = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const BFS = () => {
  // 벽을 뚫은 상태로 진행하다가 마지막에 벽에 막혀서 도착지에 도달하지 못할 수 도 있다.
  // 이 때 벽을 뚫은 상태로 노드들을 방문처리 해놓으면 벽을 뚫지 않고 돌아서 가는 루트는
  // 길이 있음에도 불구하고 isVisit 때문에 막히게 된다.
  // 만약 도착지 주변이 벽으로 막혀있다면, 즉 마지막에 벽뚫을 시도해야 한다면
  // 미리 벽을 뚫어서 갱신한 isVisit때문에 정상적인 루트도 막혀버리는 것이다.
  // 따라서 벽을 뚫어서 진행하는 isVisit을 따로 만들어서 벽을 뚫기 전이랑 겹치지 않게 한다.
  const isVisit = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => Array(2).fill(false))
  );
  isVisit[0][0].map((it) => true);
  let queue = new Queue();
  queue.push([0, 0, false, 1]);
  while (queue.length) {
    let [x, y, isBreak, l] = queue.shift();
    for (let [dx, dy] of offset) {
      let nx = x + dx,
        ny = y + dy;
      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

      // 벽을 뚫은 상태로 이미 방문한 노드에 도달한 경우
      if (isBreak && isVisit[nx][ny][1]) continue;
      // 벽을 뚫지 않은 상태로 이미 방문한 노드에 도달한 경우
      if (!isBreak && isVisit[nx][ny][0]) continue;
      if (arr[nx][ny] === 1 && isBreak) continue;
      if (!isBreak) isVisit[nx][ny][0] = true;
      isVisit[nx][ny][1] = true;

      if (arr[nx][ny] === 1) queue.push([nx, ny, true, l + 1]); // 벽뚫 사용
      else queue.push([nx, ny, isBreak, l + 1]);
      if (nx === N - 1 && ny === M - 1) return l + 1;
    }
  }
  return -1;
};

console.log(N === 1 && M === 1 ? 1 : BFS());
