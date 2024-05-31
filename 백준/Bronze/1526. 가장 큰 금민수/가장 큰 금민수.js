let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);

for (let i = N; i >= 0; i--) {
  let flag = false;

  let str = String(i);
  for (let j = str.length - 1; j >= 0; j--) {
    if (str[j] !== "4" && str[j] !== "7") {
      flag = true;
      break;
    }
  }
  // str을 다 돌았는데 4와 7 이외의 문자가 있었다면 flag === true
  if (flag) continue;
  console.log(i);
  return;
}
