let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, ...inputArr] = input;
n = Number(n);

// ------------------------------------------------------------------

let res = [];
for (let t = 0; t < n; t++) {
  let m = Number(inputArr[t * 2].split(" ")[1]);
  let arr = inputArr[t * 2 + 1].split(" ").map((it) => Number(it));
  let cnt = 1;
  while (1) {
    let target = arr.shift();
    if (Math.max(...arr) > target) {
      arr.push(target);
      if (m === 0) {
        m = arr.length;
      }
    } else {
      if (m === 0) {
        res.push(cnt);
        break;
      }
      cnt++;
    }
    m--;
  }
}
console.log(res.join("\n"));
