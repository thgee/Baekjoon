let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");
let [s, e] = input.map((it) => Number(it));

const isVisit = Array.from({ length: 100001 }, () => 0);

const BFS = () => {
  let queue = [[s, 0]];
  while (queue.length) {
    let [v, cnt] = queue.shift();

    if (v === e) return cnt;
    for (let x of [v + 1, v - 1, v * 2]) {
      if (isVisit[x] || x < 0 || x > 100000) continue;
      queue.push([x, cnt + 1]);
      isVisit[x] = 1;
    }
  }
};

console.log(BFS());
