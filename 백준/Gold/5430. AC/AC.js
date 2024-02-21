// 1. 링크드리스트로 덱을 구현한다.
// 2. R가 나오면 head와 tail중 시작 지점을 정해준다.
// 3. D가 나오면 현재 방향에 따라 removeFirst, removeLast 중 하나를 수행한다.
// 4. 출력시에 현재 방향에 따라 정방향, 역방향 출력 함수중 하나를 선택하여 출력한다.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
class Deque {
  constructor() {
    this.length = 0;
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  addLast(data) {
    let newNode = new Node(data);
    newNode.next = this.tail;
    newNode.prev = this.tail.prev;
    newNode.next.prev = newNode;
    newNode.prev.next = newNode;
    this.length++;
  }
  removeFirst() {
    let tmp = this.head.next.data;
    this.head.next.next.prev = this.head;
    this.head.next = this.head.next.next;
    this.length--;
    return tmp;
  }
  removeLast() {
    let tmp = this.tail.prev.data;
    this.tail.prev.prev.next = this.tail;
    this.tail.prev = this.tail.prev.prev;
    this.length--;
    return tmp;
  }
  returnForward() {
    let tmp = [];
    let i = this.head.next;
    while (i !== this.tail) {
      tmp.push(i.data);
      i = i.next;
    }
    return tmp;
  }
  returnReverse() {
    let tmp = [];
    let i = this.tail.prev;
    while (i !== this.head) {
      tmp.push(i.data);
      i = i.prev;
    }
    return tmp;
  }
}

let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

let T = arr.shift();
let res = [];

for (let t = 0, k = 0; t < T; t++) {
  let deque = new Deque();
  let opr = arr[k].trim();
  k += 2;
  arr[k++].match(/\d+/g)?.map((it) => deque.addLast(Number(it)));
  let dir = true; // true이면 정방향 false이면 역방향
  const operation = () => {
    for (let x of opr) {
      switch (x) {
        case "R":
          dir = !dir; // 방향을 바꿔줌
          break;
        case "D":
          if (deque.length === 0) return -1; // 삭제할 것이 없다면 -1을 반환
          dir ? deque.removeFirst() : deque.removeLast();
          break;
      }
    }
    return 0;
  };

  if (operation() === -1) res.push("error");
  else {
    dir
      ? res.push(`[${deque.returnForward()}]`)
      : res.push(`[${deque.returnReverse()}]`);
  }
}

console.log(res.join("\n"));
