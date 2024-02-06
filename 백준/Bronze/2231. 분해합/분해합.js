let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let n = fs.readFileSync(filePath).toString().trim();
n = Number(n);
// -------------------------------------------------------------------------

const getDisassemble = (num) => {
  let sum = num;
  while (num !== 0) {
    sum += num % 10;
    num = parseInt(num / 10);
  }
  return sum;
};

let res = 0;
for (let i = 1; i <= n; i++) {
  if (getDisassemble(i) === n) {
    res = i;
    break;
  }
}

console.log(res);
