let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => Number(it)));

class Queue {
  constructor() {
    this.data = [];
    this.head = 0;
    this.tail = 0;
    this.length = 0;
  }

  push(data) {
    this.length++;
    this.data[this.tail++] = data;
  }

  unshift() {
    this.length--;
    return this.data[this.head++];
  }
}

let [[N, M], arr] = input;
const origin = arr.join("");
sorted = arr.sort().join("");

const flip = (str, k) => {
  // k부터 k+M까지 뒤집기
  str = str.split("");
  let l = k;
  let r = k + M - 1;
  while (l < r) {
    [str[l], str[r]] = [str[r], str[l]];
    r--;
    l++;
  }
  return str.join("");
};

const BFS = () => {
  const queue = new Queue();
  queue.push([origin, 0]);
  const isVisit = new Map();
  while (queue.length) {
    let [s, cnt] = queue.unshift(); // 큐에서 문자열 하나를 꺼내서
    if (s === sorted) return cnt;
    if (isVisit.get(s)) continue;
    // 해당 문자열의 모든 자리수에서 flip을 적용해보고 다시 큐에 삽입
    // 삽입하기 전에 정렬이 완료되었다면 즉시 종료
    for (let i = 0; i < N - (M - 1); i++) {
      flipedstr = flip(s, i);
      queue.push([flipedstr, cnt + 1]);
    }
    isVisit.set(s, true);
  }
  return -1;
};

console.log(BFS());
