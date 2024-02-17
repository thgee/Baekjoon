let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
arr = arr.map((it) => Number(it.trim()));
arr.shift();

class Heap {
  constructor() {
    this.arr = [];
    this.n = 0;
  }
  pop() {
    if (this.n === 0) return 0;
    let returnData = this.arr[1];
    let tmp = this.arr[this.n--];
    let i = 1;
    while (i * 2 <= this.n) {
      let l = i * 2,
        r = i * 2 + 1;
      let minIdx = l;
      if (r <= this.n) {
        // 자식이 둘인 경우
        minIdx = this.arr[l] < this.arr[r] ? r : l;
      }
      if (tmp < this.arr[minIdx]) {
        this.arr[i] = this.arr[minIdx];
        i = minIdx;
      } else break;
    }
    this.arr[i] = tmp;
    return returnData;
  }

  push(data) {
    this.arr[++this.n] = data;
    let i = this.n;
    let tmp = this.arr[i];
    while (i > 1) {
      let parentIdx = Math.floor(i / 2);
      if (tmp > this.arr[parentIdx]) {
        this.arr[i] = this.arr[parentIdx];
        i = parentIdx;
      } else break;
    }
    this.arr[i] = tmp;
  }
}

let res = [];
let heap = new Heap();
for (let x of arr) {
  x === 0 ? res.push(heap.pop()) : heap.push(x);
}

console.log(res.join("\n"));
