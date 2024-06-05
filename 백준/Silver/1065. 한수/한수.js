let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let N = Number(input);

// 1 11 111 1111
// 1 12 123 1234
// ...
// 1 18

// 8 88 888
// 8 89
// 앞자리는 i로 순회 (1~9)
// 각 앞자리마다 3자리까지 반복하며 검사
// 공차를 0부터 9까지 잡고 돌기
// 해당 자리가 10보다 크거나 같으면 cnt 세지 않고 종료

let cnt = 0;
for (let i = 1; i <= 9; i++) {
  if (i > N) break;
  cnt++;
  for (let k = 0; k <= 9; k++) {
    let num = i;
    let prev = i;
    for (let j = 0; j < 2; j++) {
      prev += k;
      if (prev >= 10) break;
      num = num * 10 + prev;
      if (num > N) break;
      cnt++;
    }
  }
}

for (let i = 1; i <= 9; i++) {
  for (let k = 1; k <= 9; k++) {
    let num = i;
    let prev = i;
    for (let j = 0; j < 2; j++) {
      prev -= k;
      if (prev < 0) break;
      num = num * 10 + prev;
      if (num > N) break;
      cnt++;
    }
  }
}

console.log(cnt);
