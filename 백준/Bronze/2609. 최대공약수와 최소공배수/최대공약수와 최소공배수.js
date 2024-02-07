let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");
let [n, m] = [Number(input[0]), Number(input[1])];
// ------------------------------------------------------------------

const getGCD = (max, min) => {
  let tmp = max % min;
  if (tmp === 0) return min;
  return getGCD(min, tmp);
};
let GCD = getGCD(n, m);
let LCM = (n * m) / GCD;
console.log(GCD);
console.log(LCM);
