let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => Number(it)));

input.shift();
const [btns, N, ...st] = input;
btns.unshift(-1); // 스위치 인덱스는 1부터 시작

for (let [mf, idx] of st) {
  // 남자
  if (mf === 1) {
    const offset = idx;
    while (1) {
      btns[idx] === 1 ? (btns[idx] = 0) : (btns[idx] = 1);
      idx += offset;
      if (idx >= btns.length) break;
    }
  }
  // 여자
  if (mf === 2) {
    btns[idx] === 1 ? (btns[idx] = 0) : (btns[idx] = 1);
    let i = 0;
    while (1) {
      if (btns[idx + i] === btns[idx - i]) {
        // 양쪽이 대칭이라면 스위치를 바꿈
        btns[idx + i] === 1 ? (btns[idx + i] = 0) : (btns[idx + i] = 1);
        btns[idx - i] === 1 ? (btns[idx - i] = 0) : (btns[idx - i] = 1);
        i++;
      } else break;
    }
  }
}

let res = "";

for (let i = 1; i < btns.length; i++) {
  if (i % 20 === 1) {
    res.trim();
    res += "\n";
  }
  res += btns[i] + " ";
}
console.log(res.trim());
