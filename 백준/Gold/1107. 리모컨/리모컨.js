// + - 버튼만 눌러서 찾는 경우로 초기화
// 중복순열로 0 ~ 6자리 (이때, 500000 이하를 유지할 것) 숫자를 선택한다
// 선택한 숫자에서 n까지 +- 버튼으로 이동

let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = [Number(input[0]), Number(input[1])];

let arr = input[2] ? input[2].split(" ").map((it) => Number(it)) : [];

let min = Math.abs(n - 100);

for (let i = 0; i <= 1000000; i++) {
  let flag = 0;
  for (let x of arr) if (String(i).includes(String(x))) flag = 1;
  if (flag === 1) continue;

  min = Math.min(min, Math.abs(i - n) + String(i).length);
}

console.log(min);
