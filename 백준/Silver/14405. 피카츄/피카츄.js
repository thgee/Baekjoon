let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim();

const words = ["pi", "ka", "chu"];

for (let i = 0; i < arr.length; ) {
  let j = i;
  for (let word of words) {
    if (arr.slice(i, i + word.length) === word) {
      i += word.length;
      break;
    }
  }
  if (j === i) {
    console.log("NO");
    return;
  }
}
console.log("YES");
