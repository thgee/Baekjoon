let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

// -------------------------------------------------------------------------

let n = Number(input);



const isTreeSix = (num) => {
  num = String(num);
  let cnt = 0;
  for (let x of num) {
    if (x === "6") cnt++;
    else cnt = 0;
    if (cnt === 3) return true;
  }
  return false;
};

let cnt = 0,
  num = 665;

while (cnt < n) {
  num++;
  if (isTreeSix(num)) cnt++;
}

console.log(num);
