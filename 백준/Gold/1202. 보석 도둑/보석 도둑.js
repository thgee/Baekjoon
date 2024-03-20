// 1. 가방을 오름차순, 보석을 무게 기준 오름차순으로 정렬
// 2. 가방을 순회하며 해당 가방에 넣을 수 있는 보석들을 모두 가치기준 최대힙에 담는다
//    이를 수행할 때 보석에 포인터를 하나 넣어서 포인터가 증가하면서
//    현재 가방의 용량에 담을 수 있는 것들은 모두 큐에 삽입하면 된다.
// 3. 힙에 모두 담았으면, 최대 가치 보석을 delete 하여 res에 그 가치를 누적해주면 된다.

let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
arr = arr.map((it) => it.split(" ").map((it) => Number(it)));
let [N, K] = arr.shift();

class Heap {
  constructor() {
    this.data = [];
    this.n = 0;
  }

  insert(data) {
    let [curIdx, curData] = [++this.n, data[1]];
    while (curIdx > 1) {
      let [parentIdx, parentData] = [
        Math.floor(curIdx / 2),
        this.data[Math.floor(curIdx / 2)][1],
      ];
      if (parentData < curData) {
        this.data[curIdx] = this.data[parentIdx];
        curIdx = parentIdx;
      } else break;
    }
    this.data[curIdx] = data;
  }

  delete() {
    if (this.n === 0) return;
    let returnData = this.data[1];

    let [curIdx, curData] = [1, this.data[this.n][1]];
    let tmp = this.data[this.n--];

    while (curIdx * 2 <= this.n) {
      let childIdx = curIdx * 2;
      if (
        childIdx + 1 <= this.n &&
        this.data[childIdx][1] < this.data[childIdx + 1][1]
      )
        childIdx++;
      let childData = this.data[childIdx][1];
      if (curData < childData) {
        this.data[curIdx] = this.data[childIdx];
        curIdx = childIdx;
      } else break;
    }
    this.data[curIdx] = tmp;
    return returnData;
  }
}

const jewels = arr.slice(0, N);
const bags = arr.slice(N, N + K).map((it) => it[0]);

jewels.sort((n, p) => n[0] - p[0]);
bags.sort((n, p) => n - p);
let res = 0;

const heap = new Heap();
for (let i = 0, j = 0; i < K; i++) {
  while (1) {
    if (j >= jewels.length) break;
    if (jewels[j][0] <= bags[i]) heap.insert(jewels[j++]);
    else break;
  }
  let item = heap.delete();
  res += item ? item[1] : 0;
}

console.log(res);
