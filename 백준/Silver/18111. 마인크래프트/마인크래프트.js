let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [fl, ...arr] = input;
let [n, m, b] = fl
  .trim()
  .split(" ")
  .map((it) => Number(it));

arr = arr.map((it) =>
  it
    .trim()
    .split(" ")
    .map((it) => Number(it))
);
// ------------------------------------------------------------------

// 가장 높은 칸 ~ 가장 낮은 칸 브루트포스
// 각 칸마다 걸리는 시간을 측정하여 최솟값 구하기

// 배열을 돌면서 f를 기준으로 땅을 파거나 매꾸기
//    (한 칸 팔때마다 block + 1, time + 2)
//    (한 칸 매꿀때마다 block - 1, time - 1)
// block 음수이면 실패
// minTime, floor 갱신
// 시간이 같을때는 갱신하지 않고 작을때만 갱신하기

let minTime = Number.MAX_SAFE_INTEGER,
  floor;
let [max, min] = [Math.max(...arr.flat()), Math.min(...arr.flat())];

for (let f = max; f >= min; f--) {
  let time = 0;
  let block = b;
  for (let l of arr)
    for (let i of l) {
      let diff = Math.abs(i - f); // 목표 칸과 현재 칸의 차이
      if (i > f) {
        block += diff;
        time += 2 * diff;
      } else if (i < f) {
        block -= diff;
        time += diff;
      }
    }
  if (block >= 0 && minTime > time) {
    minTime = time;
    floor = f;
  }
}

console.log(minTime, floor);
