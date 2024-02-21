let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.length = 0;
  }

  enqueue(data) {
    let newNode = new Node(data);
    newNode.next = this.tail;
    newNode.prev = this.tail.prev;
    newNode.next.prev = newNode;
    newNode.prev.next = newNode;
    this.length++;
  }

  dequeue() {
    let tmp = this.head.next.data;
    this.head.next.next.prev = this.head;
    this.head.next = this.head.next.next;
    this.length--;
    return tmp;
  }
}

let n = arr.shift();

arr = arr.map((it) =>
  it
    .trim()
    .split("")
    .map((it) => Number(it))
);

const BFS = (x, y) => {
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  let queue = new Queue();
  queue.enqueue([x, y]);
  arr[x][y] = 0;
  let cnt = 1;
  while (queue.length) {
    let [x, y] = queue.dequeue();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i],
        ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= n || arr[nx][ny] === 0) continue;
      arr[nx][ny] = 0;
      cnt++;
      queue.enqueue([nx, ny]);
    }
  }
  return cnt;
};

let res = [];
let cntHome = 0;
for (let i = 0; i < n; i++)
  for (let j = 0; j < n; j++)
    if (arr[i][j] === 1) {
      res.push(BFS(i, j));
      cntHome++;
    }

res.sort((n, p) => n - p);
res.unshift(cntHome);
console.log(res.join("\n"));
