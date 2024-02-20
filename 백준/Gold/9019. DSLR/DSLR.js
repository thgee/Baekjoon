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
    .split(" ")
    .map((it) => Number(it))
);
let cnt = 10;

const BFS = (s, e) => {
  let isVisit = Array.from({ length: 10000 }, () => 0);
  isVisit[s] = 1;
  let queue = new Queue();
  queue.enqueue([s, ""]);

  while (queue.length) {
    let [data, oprs] = queue.dequeue();
    if (data === e) {
      return oprs;
    }
    let D = (data * 2) % 10000;
    let S = data === 0 ? 9999 : data - 1;
    let L = (data % 1000) * 10 + Math.floor(data / 1000);
    let R = (data % 10) * 1000 + Math.floor(data / 10);
    let tmp = [
      [D, "D"],
      [S, "S"],
      [L, "L"],
      [R, "R"],
    ];

    for (let [num, opr] of tmp) {
      if (isVisit[num] === 1) continue;
      isVisit[num] = 1;
      queue.enqueue([num, oprs + opr]);
    }
  }
};
let res = [];
for (let [s, e] of arr) {
  res.push(BFS(s, e));
}

console.log(res.join("\n"));
