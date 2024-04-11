let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) =>
    it
      .trim()
      .split("")
      .map((it) => Number(it))
  );

const SIZE = arr.length;
let l = 0;
const checkRow = (num, x, y) => {
  for (let i = 0; i < SIZE; i++) {
    if (arr[x][i] === num) return false;
  }
  return true;
};
const checkCol = (num, x, y) => {
  for (let i = 0; i < SIZE; i++) {
    if (arr[i][y] === num) return false;
  }
  return true;
};
const checksqr = (num, x, y) => {
  x = Math.floor(x / (SIZE / 3)) * 3;
  y = Math.floor(y / (SIZE / 3)) * 3;

  for (let i = 0; i < SIZE / 3; i++)
    for (let j = 0; j < SIZE / 3; j++) {
      if (arr[x + i][y + j] === num) return false;
    }
  return true;
};

const checksudoku = (num, x, y) => {
  if (checkRow(num, x, y) && checkCol(num, x, y) && checksqr(num, x, y))
    return true;
  return false;
};

const findNext = (x, y) => {
  let nx = x,
    ny = y;
  if (y <= SIZE - 2) ny++;
  else if (y === SIZE - 1) {
    nx++;
    ny = 0;
  }
  return [nx, ny];
};

let isFinish = false;
const DFS = (x, y) => {
  if (isFinish) return;

  l++;
  for (let num = 1; num <= SIZE; num++) {
    if (checksudoku(num, x, y)) arr[x][y] = num;
    else continue;

    let nx = x,
      ny = y;

    // 다음 좌표를 찾는다
    while (arr[nx][ny] !== 0) {
      [nx, ny] = findNext(nx, ny);

      if (nx === SIZE) {
        isFinish = true;
        return;
      }
    }

    DFS(nx, ny);
    if (isFinish) return;
    arr[x][y] = 0;
  }
};

const startDFS = () => {
  for (let i = 0; i < SIZE; i++)
    for (let j = 0; j < SIZE; j++)
      if (arr[i][j] === 0) {
        DFS(i, j);
        return;
      }
};
startDFS();

console.log(arr.map((it) => it.join("")).join("\n"));
