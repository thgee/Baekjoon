let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((it) => String(it));

const [L, R] = input;

let res = 0;
if (L.length === R.length) {
  // 길이가 다르면 0
  //  높은자리부터 각 자리수가 같다면
  //    그게 8이라면 카운트
  //    그게 8이 아니라면 continue
  //  자리수가 다르다면 break
  for (let i = 0; i < L.length; i++) {
    if (L[i] === R[i]) {
      if (L[i] === "8") res++;
      else continue;
    } else break;
  }
}
console.log(res);
