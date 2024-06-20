let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.trim());

const N = Number(arr.shift());

class Queue {
  constructor() {
    this.length = 0;
    this.data = [];
    this.head = 0;
    this.tail = 0;
  }

  push(data) {
    this.data[this.tail++] = data;
    this.length++;
  }

  shift() {
    if (this.length === 0) return -1;
    this.length--;

    return this.data[this.head++];
  }
}
let res = [];
let queue = new Queue();
for (let i = 0; i < arr.length; i++) {
  let [opr, data] = arr[i].split(" ");
  switch (opr) {
    case "push":
      queue.push(data);
      break;
    case "front":
      res.push(!queue.length ? -1 : queue.data[queue.head]);

      break;
    case "back":
      res.push(!queue.length ? -1 : queue.data[queue.tail - 1]);

      break;
    case "size":
      res.push(queue.length);
      break;
    case "empty":
      res.push(!queue.length ? 1 : 0);
      break;
    case "pop":
      res.push(queue.shift());
      break;
  }
}
console.log(res.join("\n"));
