let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((it) => Number(it));

let [N, M, O] = input;

if (N === 60 && (M === 60) & (O === 60)) console.log("Equilateral");
else if (N + M + O !== 180) console.log("Error");
else {
  if (N === M || N === O || M === O) console.log("Isosceles");
  else {
    if (N !== M && N !== O && M !== O) console.log("Scalene");
  }
}
