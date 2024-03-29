// 대각선당 하나의 비숍을 둘 수 있다.
// 우상향 대각선으로 나눈 후에 각 대각선마다 가능한 칸에 비숍을 둔다.
// 가능한 칸인지 판단하는 기준은 비숍을 두기 전에 좌상향 대각선에 다른 비숍이 있는지 확인한다.

let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim();

let N = Number(arr);
let res = 1;
for (let i = 1; i <= N; i++) res *= i;

console.log(res);
