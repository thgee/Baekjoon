let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.trim());

const [[N], crains, [M], boxes] = input.map((it) =>
  it.split(" ").map((it) => Number(it))
);

// 크레인과 박스 모두 내림차순으로 정렬

// time = 0
// if(crain[0] < boxes[0]) time = -1
// else
// 투포인터로 크레인, 박스 배열을 하나씩 잡음
// if(isMoved[j]) j++; continue; (이미 옮겼다면 다음박스로 이동)
// crains[i] >= boxes[j] 이면 i++, j++, isMoved[j] = true, moveCnt++ (해당 박스 옮기기)
// else j++  (박스가 무거워서 못옮기므로 다음 박스 잡기)
// j === M - 1 이면 마지막 박스까지 시도해본것이므로, (moveCnt === M) 으로 모든 박스를
//  옮긴것인지 확인한 후 모두 옮겼다면 break 걸고 출력후 종료
// moveCnt !== M 이면 time++ 후에 다시 첫 크레인부터 잡고 반복

crains.sort((n, p) => p - n);
boxes.sort((n, p) => p - n);

let time = 0;
const isMoved = Array.from({ length: M }, () => false);
let moveCnt = 0;

if (crains[0] < boxes[0]) time = -1;
else
  while (1) {
    // moveCnt < M && console.log(moveCnt);
    if (moveCnt === M) break;
    time++;
    let i = 0,
      j = 0;
    while (1) {
      if (j === M) break;
      if (isMoved[j]) {
        j++;
        continue;
      }

      if (crains[i] >= boxes[j]) {
        isMoved[j] = true;
        moveCnt++;
        i++;
        j++;
      } else j++;
    }
  }

console.log(time);
