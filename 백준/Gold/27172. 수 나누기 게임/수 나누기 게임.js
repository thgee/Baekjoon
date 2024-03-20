let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
let N = Number(arr.shift());
arr = arr[0].split(" ").map((it) => Number(it));

const size = 1000001;
const isExist = Array.from({ length: size }, () => -1);
for (let i = 0; i < N; i++) {
  isExist[arr[i]] = i;
}
const scr = Array.from({ length: N }, () => 0);
for (let i = 0; i < N; i++) {
  for (let j = arr[i] * 2; j < size; j += arr[i]) {
    if (isExist[j] !== -1) {
      scr[i]++;
      scr[isExist[j]]--;
    }
  }
}

console.log(scr.join(" "));
