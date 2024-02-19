let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
let [N, M, H] = arr
  .shift()
  .trim()
  .split(" ")
  .map((it) => Number(it));
arr = arr.map((it) =>
  it
    .trim()
    .split(" ")
    .map((it) => Number(it))
);

class Node {
  constructor(x) {
    this.data = x;
    this.prev = null;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.length = 0;
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  dequeue() {
    this.length--;
    let data = this.head.next.data;
    this.head.next.next.prev = this.head;
    this.head.next = this.head.next.next;
    return data;
  }
  enqueue(data) {
    this.length++;
    let newNode = new Node(data);
    newNode.next = this.tail;
    newNode.prev = this.tail.prev;
    newNode.next.prev = newNode;
    newNode.prev.next = newNode;
  }
}

// 3차원 배열로 변환
let box = [];
for (let i = 0; i < arr.length; i += M) {
  box.push(arr.slice(i, i + M));
}

let queue = new Queue();
let notRipeCnt = 0;

let dx = [0, -1, 0, 1, 0, 0];
let dy = [0, 0, 1, 0, -1, 0];
let dz = [-1, 0, 0, 0, 0, 1];

const BFS = () => {
  let res = 0;
  while (queue.length) {
    let [z, x, y, cnt] = queue.dequeue();
    res = cnt;
    for (let i = 0; i < 6; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      let nz = z + dz[i];
      if (
        nx < 0 ||
        nx >= M ||
        ny < 0 ||
        ny >= N ||
        nz < 0 ||
        nz >= H ||
        box[nz][nx][ny] !== 0
      )
        continue;
      box[nz][nx][ny] = 1;
      queue.enqueue([nz, nx, ny, cnt + 1]);
      notRipeCnt--;
    }
  }
  return res;
};

for (let k = 0; k < H; k++)
  for (let i = 0; i < M; i++)
    for (let j = 0; j < N; j++) {
      if (box[k][i][j] === 1) queue.enqueue([k, i, j, 0]);
      if (box[k][i][j] === 0) notRipeCnt++;
    }
let res = BFS();
console.log(notRipeCnt === 0 ? res : -1);
