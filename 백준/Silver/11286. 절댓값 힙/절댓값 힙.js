let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
let n = Number(arr.shift());
arr = arr.map((it) => Number(it));

const compareAbs = (a, b) => {
  if (Math.abs(a) > Math.abs(b) || (Math.abs(a) === Math.abs(b) && a > b))
    return 1;
  return 0;
};

class Heap {
  constructor() {
    this.data = [];
    this.n = 0;
  }

  push(data) {
    let curIdx = ++this.n;

    while (curIdx > 1) {
      let parentIdx = parseInt(curIdx / 2);
      let parentData = this.data[parentIdx];
      if (compareAbs(parentData, data)) {
        this.data[curIdx] = parentData;
        curIdx = parentIdx;
      } else break;
    }
    this.data[curIdx] = data;
  }

  pop() {
    let returnData = this.data[1];
    let curIdx = 1,
      curData = this.data[this.n--];

    while (curIdx * 2 <= this.n) {
      let childIdx = curIdx * 2;
      if (childIdx < this.n) {
        // 자식이 두개인 경우
        if (compareAbs(this.data[childIdx], this.data[childIdx + 1]))
          childIdx = childIdx + 1;
      }
      let childData = this.data[childIdx];
      if (compareAbs(curData, childData)) {
        this.data[curIdx] = childData;
        curIdx = childIdx;
      } else break;
    }
    this.data[curIdx] = curData;
    return returnData;
  }
}

let heap = new Heap();
let res = [];
for (let x of arr) {
  if (heap.n === 0 && x === 0) res.push(0);
  else if (x === 0) res.push(heap.pop());
  else heap.push(x);
}
console.log(res.join("\n"));
