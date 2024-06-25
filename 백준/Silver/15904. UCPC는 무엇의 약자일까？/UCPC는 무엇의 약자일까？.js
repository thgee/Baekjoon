let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim();

let res = false;
let sig = Array.from({ length: 4 }, () => 0);
for (let x of arr) {
  if (x === "U") {
    sig[0] = 1;
  }
  if (x === "C" && sig[0]) {
    sig[1] = 1;
  }
  if (x === "P" && sig[1]) {
    sig[2] = 1;
  }
  if (x === "C" && sig[2]) {
    res = true;
  }
}
console.log(res ? "I love UCPC" : "I hate UCPC");
