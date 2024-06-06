let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim();

let cnt = 0;
for (let i = 0; i < arr.length; ) {
  if (arr[i] === "d") {
    if (arr[i + 1] === "z" && arr[i + 2] === "=") i += 3;
    else if (arr[i + 1] === "-") i += 2;
    else i++;
  } else if (arr[i] === "c" && (arr[i + 1] === "=" || arr[i + 1] === "-"))
    i += 2;
  else if (arr[i] === "l" && arr[i + 1] === "j") i += 2;
  else if (arr[i] === "n" && arr[i + 1] === "j") i += 2;
  else if (arr[i] === "s" && arr[i + 1] === "=") i += 2;
  else if (arr[i] === "z" && arr[i + 1] === "=") i += 2;
  else i++;
  cnt++;
}

console.log(cnt);
