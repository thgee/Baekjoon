let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let _ = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((it) => Number(it));

console.log(
  _[0] > _[1]
    ? _[1] > _[2]
      ? _[1]
      : _[0] > _[2]
      ? _[2]
      : _[0]
    : _[1] < _[2]
    ? _[1]
    : _[0] < _[2]
    ? _[2]
    : _[0]
);
