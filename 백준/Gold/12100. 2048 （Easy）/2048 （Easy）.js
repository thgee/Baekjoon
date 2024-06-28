let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map((it) => Number(it)));

const [N] = arr.shift();

// 상하좌우를 5번 받으면서 arr을 변화시킴
// 5번 이동 후 arr에서 가장 큰 수를 max에 갱신
// 매 DFS마다 arr을 훼손하지 않기 위해 복사본을 사용할 것

const moveBlocks = (arr, dir) => {
  // s부터 e까지 모든 블록을 몰아넣기
  // 현재 블록을 잡아놓고 그 뒤에 0이 아닌 블록을 찾는다
  //  그 블록이 현재 블록과 같다면 합치고 그 다음 0이 아닌 블록을 찾아서 붙여주기
  //  현재 블록과 다르다면 그냥 붙여주기

  switch (dir) {
    case "r":
      for (let i = 0; i < N; i++) {
        let flag = false;
        for (j = N - 1, k = N, ableComb = 0; j >= 0; j--) {
          // 0이 아닌 블록 찾기
          while (1) {
            k--;
            if (k < 0) {
              flag = true;
              break;
            }
            if (arr[i][k] !== 0) break;
          }
          if (flag) break;

          // 현재 위치로 해당 블록 가져오기
          [arr[i][j], arr[i][k]] = [arr[i][k], arr[i][j]];

          // 가져온 블록이 이전 블록과 같다면 합치기
          if (j + 1 <= N - 1 && ableComb <= 0 && arr[i][j + 1] === arr[i][j]) {
            arr[i][j + 1] = arr[i][j] * 2;
            arr[i][j] = 0;
            ableComb = 2;
            j++;
          }

          ableComb--;
        }
      }
      break;
    case "l":
      for (let i = 0; i < N; i++) {
        let flag = false;
        for (j = 0, k = -1, ableComb = 0; j <= N - 1; j++) {
          // 0이 아닌 블록 찾기
          while (1) {
            k++;
            if (k >= N) {
              flag = true;
              break;
            }
            if (arr[i][k] !== 0) break;
          }
          if (flag) break;

          // 현재 위치로 해당 블록 가져오기
          [arr[i][j], arr[i][k]] = [arr[i][k], arr[i][j]];

          // 가져온 블록이 이전 블록과 같다면 합치기
          if (j - 1 >= 0 && ableComb <= 0 && arr[i][j - 1] === arr[i][j]) {
            arr[i][j - 1] = arr[i][j] * 2;
            arr[i][j] = 0;
            ableComb = 2;
            j--;
          }

          ableComb--;
        }
      }
      break;
    case "u":
      for (let i = 0; i < N; i++) {
        let flag = false;
        for (j = 0, k = -1, ableComb = 0; j <= N - 1; j++) {
          // 0이 아닌 블록 찾기
          while (1) {
            k++;
            if (k >= N) {
              flag = true;
              break;
            }
            if (arr[k][i] !== 0) break;
          }
          if (flag) break;

          // 현재 위치로 해당 블록 가져오기
          [arr[j][i], arr[k][i]] = [arr[k][i], arr[j][i]];

          // 가져온 블록이 이전 블록과 같다면 합치기
          if (j - 1 >= 0 && ableComb <= 0 && arr[j - 1][i] === arr[j][i]) {
            arr[j - 1][i] = arr[j][i] * 2;
            arr[j][i] = 0;
            ableComb = 2;
            j--;
          }

          ableComb--;
        }
      }
      break;
    case "d":
      for (let i = 0; i < N; i++) {
        let flag = false;
        for (j = N - 1, k = N, ableComb = 0; j >= 0; j--) {
          // 0이 아닌 블록 찾기
          while (1) {
            k--;
            if (k < 0) {
              flag = true;
              break;
            }
            if (arr[k][i] !== 0) break;
          }
          if (flag) break;

          // 현재 위치로 해당 블록 가져오기
          [arr[j][i], arr[k][i]] = [arr[k][i], arr[j][i]];

          // 가져온 블록이 이전 블록과 같다면 합치기
          if (j + 1 <= N - 1 && ableComb <= 0 && arr[j + 1][i] === arr[j][i]) {
            arr[j + 1][i] = arr[j][i] * 2;
            arr[j][i] = 0;
            ableComb = 2;
            j++;
          }

          ableComb--;
        }
      }
      break;
  }
};

const offset = ["l", "r", "u", "d"];

let max = 0;
const DFS = (L, arr) => {
  if (L === 5) {
    max = Math.max(max, ...arr.flat());
    return;
  }
  for (let dir of offset) {
    let _arr = arr.slice().map((it) => it.slice());
    moveBlocks(_arr, dir);
    DFS(L + 1, _arr);
  }
};

DFS(0, arr);

console.log(max);
