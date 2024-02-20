let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(arr.shift());
arr = arr.map((it) =>
  it
    .trim()
    .split(" ")
    .map((it) => Number(it))
);

let whiteCnt = 0,
  blueCnt = 0;
const DFS = (x, y, n) => {
  if (n === 1) {
    return arr[x][y];
  }
  let dx = [0, 0, 1, 1];
  let dy = [0, 1, 0, 1];
  let tmp = [];
  for (let i = 0; i < 4; i++) {
    tmp.push(DFS(x + dx[i] * (n / 2), y + dy[i] * (n / 2), n / 2));
  }
  let sum = tmp.reduce((acc, cur) => acc + cur, 0);
  if (sum === 4) return 1; // 4개로 나눠진 종이가 모두 파란색인 경우
  else if (sum === 0) return 0; // 4개로 나눠진 종이가 모두 흰색인 경우
  else {
    // 색이 섞여있는 경우 --> 4개의 종이중에 파란색이나 흰색이 있다면 카운트해줌
    tmp.map((it) => {
      if (it === 1) blueCnt++;
      else if (it === 0) whiteCnt++;
    });
    return 100; // 섞여있는 색은 합쳐진 종이에서 흰색이나 검은색으로 취급하지 않기 위해 100이라는 큰수로 예외처리
  }
};

DFS(0, 0, n);
if (whiteCnt === 0 && blueCnt === 0) arr[0][0] === 1 ? blueCnt++ : whiteCnt++;
console.log(whiteCnt);
console.log(blueCnt);
