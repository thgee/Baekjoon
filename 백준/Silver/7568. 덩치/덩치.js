let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
let n = Number(arr.shift());
// ------------------------------------------------------------------

// 키와 몸무게 둘 다 큰 경우에 한해서 랭크를 올려준다

let rank = Array.from({ length: n }, () => 1);

for (let i = 0; i < n; i++) {
  let [w1, h1] = [Number(arr[i].split(" ")[0]), Number(arr[i].split(" ")[1])];
  for (let j = 0; j < n; j++) {
    let [w2, h2] = [Number(arr[j].split(" ")[0]), Number(arr[j].split(" ")[1])];
    if (w1 < w2 && h1 < h2) rank[i]++;
  }
}
console.log(rank.join(" "));
