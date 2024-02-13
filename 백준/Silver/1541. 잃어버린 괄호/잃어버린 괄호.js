let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let arr = fs.readFileSync(filePath).toString().trim();
regex = /(\d+|[-+])/g;
arr = arr.match(regex);

let sum = 0;

for (let i = 0; i < arr.length; i += 2) {
  sum += Number(arr[i]);
  if (arr[i + 1] === "-") {
    i += 2;
    while (i < arr.length) {
      sum -= Number(arr[i]);
      i += 2;
    }
  }
}

console.log(sum);
