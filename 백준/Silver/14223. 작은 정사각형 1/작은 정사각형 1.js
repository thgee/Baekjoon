let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => Number(it)));

const [N] = arr.shift();

let res = BigInt(2 * 1000000010) ** 2n;

// 두 점을 빼고 나머지 점들 중에 x,y의 최대, 최소를 구한다
// x, y중에 너비가 더 큰 쪽을 기준으로 정사각형 넓이 구하기
// 모든 점을 돌면서 최솟값 갱신

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    let filteredArr = arr.filter((v, idx) => idx !== i && idx !== j);
    let [maxX, maxY] = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
    let [minX, minY] = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
    for (let [x, y] of filteredArr) {
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
    }
    let width = maxX - minX + 2;
    let height = maxY - minY + 2;
    let len = Math.max(width, height);
    let area = BigInt(len) ** 2n;
    if (res > area) res = area;
  }
}

console.log(String(res));
