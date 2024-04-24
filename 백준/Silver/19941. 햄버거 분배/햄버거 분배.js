// 앞에 최대한 멀리 있는 햄버거 먹기
// 못먹으면 뒤에 최대한 가까운 햄버거 먹기

let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = arr
  .shift()
  .split(" ")
  .map((it) => Number(it));
arr = arr.shift().split("");

let res = 0;
for (let i = 0; i < N; i++) {
  if (arr[i] === "P") {
    for (let j = i - M; j <= i + M; j++) {
      if (arr[j] === "H") {
        arr[j] = "E";
        res++;
        break;
      }
    }
  }
}

console.log(res);
