let fs = require("fs");
const { DEFAULT_ECDH_CURVE } = require("tls");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.trim());

let [N, G] = arr.shift().split(" ");

let set = new Set(arr);

let res;
switch (G) {
  case "Y":
    res = set.size / 1;
    break;
  case "F":
    res = set.size / 2;
    break;
  case "O":
    res = set.size / 3;
    break;

  default:
    break;
}

console.log(Math.floor(res));
