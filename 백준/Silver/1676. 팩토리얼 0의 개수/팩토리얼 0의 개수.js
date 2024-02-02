let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

// -------------------------------------------------------------------------

function factorial(n) {
  return n ? BigInt(BigInt(n) * BigInt(factorial(n - 1))) : 1;
}

const solution = (n) => {
  const fArr = [...factorial(n).toString()];
  let result = 0;
  while (true) {
    const cur = fArr.pop();
    if (cur === "0") {
      result += 1;
    } else break;
  }
  return result;
};

console.log(solution(Number(input)));
