let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let arr = input.map((it) => Number(it));

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 40) arr[i] = 40;
}
console.log(arr.reduce((acc, cur) => acc + cur) / 5);
