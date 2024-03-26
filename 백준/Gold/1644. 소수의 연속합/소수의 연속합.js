// N까지 에라스토테네스의 채로 소수 배열 만들기
// 투포인터로 배열 탐색, 합이 N보다 작으면 r 증가, N보다 크면 l 증가, N과 같으면 res++

let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim();

const N = Number(arr);
const primeCheck = Array.from({ length: N + 1 }, () => true);
const prime = [];

for (let i = 2; i <= Math.sqrt(N); i++) {
  if (!primeCheck[i]) continue;
  for (let j = i * 2; j <= N; j += i) {
    primeCheck[j] = false;
  }
}

for (let i = 2; i <= N; i++) {
  if (primeCheck[i]) prime.push(i);
}

let l = 0,
  r = 0;
let res = 0;

let sum = 2;
while (r < prime.length) {
  if (N === sum) {
    res++;
    sum -= prime[l++];
    sum += prime[++r];
  } else if (N > sum) sum += prime[++r];
  else if (N < sum) sum -= prime[l++];
}

console.log(res);
