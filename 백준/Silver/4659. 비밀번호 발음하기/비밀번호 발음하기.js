let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.trim());
arr.pop();

const isVowel = (s) => {
  if (s === "a" || s === "i" || s === "o" || s === "u" || s === "e")
    return true;
  return false;
};

let res = "";
for (let s of arr) {
  let flag = true;
  let vowelCnt = 0;

  for (let i = 0; i < s.length; i++) {
    // 모음 카운트
    if (isVowel(s[i])) vowelCnt++;

    // 같은 글자 연속 2개
    if (
      i + 1 <= s.length - 1 &&
      s[i] === s[i + 1] &&
      s[i] !== "e" &&
      s[i] !== "o"
    ) {
      flag = false;
    }

    // 모음 연속 3개
    if (
      i + 2 <= s.length - 1 &&
      isVowel(s[i]) &&
      isVowel(s[i + 1]) &&
      isVowel(s[i + 2])
    )
      flag = false;

    // 자음 연속 3개
    if (
      i + 2 <= s.length - 1 &&
      !isVowel(s[i]) &&
      !isVowel(s[i + 1]) &&
      !isVowel(s[i + 2])
    )
      flag = false;
  }
  if (vowelCnt === 0) flag = false;
  flag
    ? (res += `<${s}> is acceptable.\n`)
    : (res += `<${s}> is not acceptable.\n`);
}

console.log(res);
