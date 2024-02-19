let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
let [N, M] = arr
  .shift()
  .trim()
  .split(" ")
  .map((it) => Number(it));
let box = arr.map((it) =>
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

let queue = new Queue();
let notRipeCnt = 0;

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

const BFS = () => {
  let res = 0;
  while (queue.length) {
    let [x, y, cnt] = queue.dequeue();
    res = cnt;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= M || ny < 0 || ny >= N || box[nx][ny] !== 0) continue;
      box[nx][ny] = 1;
      queue.enqueue([nx, ny, cnt + 1]);
      notRipeCnt--;
    }
  }
  return res;
};

for (let i = 0; i < M; i++)
  for (let j = 0; j < N; j++) {
    if (box[i][j] === 1) queue.enqueue([i, j, 0]);
    if (box[i][j] === 0) notRipeCnt++;
  }
let res = BFS();
console.log(notRipeCnt === 0 ? res : -1);
