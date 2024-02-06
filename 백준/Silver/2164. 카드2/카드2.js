let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let n = fs.readFileSync(filePath).toString().trim();
n = Number(n);
// -------------------------------------------------------------------------

let res;
let arr = Array.from({ length: n }, (v, i) => i + 1);

let i = 0;
while (1) {
  if (arr.length - 1 === i) {
    res = arr[i];
    break;
  }
  i++; // 하나 버림
  if (arr.length - 1 === i) {
    res = arr[i];
    break;
  }
  arr.push(arr[i++]); // 맨 앞 카드를 뒤에 추가
}

console.log(res);
