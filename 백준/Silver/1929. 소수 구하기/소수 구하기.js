let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");
let [n, m] = input;
[n, m] = [Number(n), Number(m)];

// ------------------------------------------------------------------

const isPrime = (num) => {
  for (let i = 2; i <= Number.parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return num !== 1 && true;
};

const res = [];

for (let i = n; i <= m; i++) {
  if (isPrime(i)) res.push(i);
}

console.log(res.join("\n"));
