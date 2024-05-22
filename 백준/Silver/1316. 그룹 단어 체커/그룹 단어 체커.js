let fs = require("fs");
const { toASCII } = require("punycode");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.trim());

const N = Number(input.shift());

const len = "z".charCodeAt() - "a".charCodeAt() + 1;

let res = 0;
for (let str of input) {
  const isUsed = Array.from({ length: len }, () => false);
  let i = 0;
  for (; i < str.length; i++) {
    let charNum = str[i].charCodeAt() - "a".charCodeAt();

    // 사용한 적 있는 문자면 그대로 종료
    if (isUsed[charNum]) break;
    if (str[i] !== str[i + 1]) isUsed[charNum] = true;
  }
  // break에 걸리지 않고 무사히 통과했다면
  if (i === str.length) res++;
}

console.log(res);
