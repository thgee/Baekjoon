let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let N = Number(input);

let cnt = 0;

const origin = 64;

while (1) {
  let i = 0;
  while (1) {
    if (2 ** (i + 1) > N) {
      N -= 2 ** i;
      cnt++;
      break;
    }
    i++;
  }
  if (N <= 0) break;
}

console.log(cnt);
